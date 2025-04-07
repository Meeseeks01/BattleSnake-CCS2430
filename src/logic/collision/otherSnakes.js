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

    // Check all body segments of the opponent snake
    for (const segment of snake.body) {
      for (const [direction, coord] of Object.entries(possibleMoves)) {
        if (coord.x === segment.x && coord.y === segment.y) {
          isMoveSafe[direction] = false; // mark unsafe if on body
        }
      }
    }

    // **Add head-to-head prevention**
    const opponentHead = snake.body[0]; // head of the opponent
    for (const [direction, coord] of Object.entries(possibleMoves)) {
      // If the move would land on the opponent's head, mark it unsafe
      if (coord.x === opponentHead.x && coord.y === opponentHead.y) {
        isMoveSafe[direction] = false;
      }
    }
  }

  return isMoveSafe;
}
