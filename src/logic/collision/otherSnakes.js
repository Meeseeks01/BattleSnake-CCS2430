export default function checkOtherSnakesCollision(gameState, isMoveSafe) {
  const myHead = gameState.you.body[0];
  const opponents = gameState.board.snakes;

  const possibleMoves = {
    up: { x: myHead.x, y: myHead.y + 1 },
    down: { x: myHead.x, y: myHead.y - 1 },
    left: { x: myHead.x - 1, y: myHead.y },
    right: { x: myHead.x + 1, y: myHead.y },
  };

  // Check all opponent snakes
  for (const snake of opponents) {
    if (snake.id === gameState.you.id) continue; // skip self

    // Get opponent's direction based on the last two head positions
    const opponentHead = snake.body[0];
    const opponentNeck = snake.body[1];
    let predictedHead = { x: opponentHead.x, y: opponentHead.y };

    // Predict the next move of the opponent
    if (opponentNeck) {
      if (opponentNeck.x < opponentHead.x) {  // Opponent is moving right
        predictedHead.x += 1;
      } else if (opponentNeck.x > opponentHead.x) { // Opponent is moving left
        predictedHead.x -= 1;
      } else if (opponentNeck.y < opponentHead.y) { // Opponent is moving up
        predictedHead.y += 1;
      } else if (opponentNeck.y > opponentHead.y) { // Opponent is moving down
        predictedHead.y -= 1;
      }
    }

    // Check if any move would land on the predicted head position
    for (const [direction, coord] of Object.entries(possibleMoves)) {
      if (coord.x === predictedHead.x && coord.y === predictedHead.y) {
        isMoveSafe[direction] = false; // mark unsafe if on predicted head position
      }
    }

    // Check if any move would land on the opponent's body
    for (const segment of snake.body) {
      for (const [direction, coord] of Object.entries(possibleMoves)) {
        if (coord.x === segment.x && coord.y === segment.y) {
          isMoveSafe[direction] = false; // mark unsafe if on body
        }
      }
    }
  }

  return isMoveSafe;
}
