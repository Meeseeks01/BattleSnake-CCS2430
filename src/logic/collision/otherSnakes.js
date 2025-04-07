export default function checkOtherSnakesCollision(gameState, isMoveSafe) {
  const myHead = gameState.you.body[0];
  const opponents = gameState.board.snakes;

  // Check each possible move for collisions with other snake bodies
  const directions = {
    up: { x: myHead.x, y: myHead.y + 1 },
    down: { x: myHead.x, y: myHead.y - 1 },
    left: { x: myHead.x - 1, y: myHead.y },
    right: { x: myHead.x + 1, y: myHead.y },
  };

  for (let snake of opponents) {
    // Skip our own snake
    if (snake.id === gameState.you.id) continue;

    for (let segment of snake.body) {
      for (let direction in directions) {
        const target = directions[direction];
        if (target.x === segment.x && target.y === segment.y) {
          isMoveSafe[direction] = false;
        }
      }
    }
  }

  return isMoveSafe;
}