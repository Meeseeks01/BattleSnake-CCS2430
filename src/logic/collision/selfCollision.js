export default function checkSelfCollision(gameState, isMoveSafe) {
  const myBody = gameState.you.body;
  const myHead = gameState.you.head;
  for (let i = 0; i < myBody.length; i++) {
    const segment = myBody[i];
    if (myHead.x === segment.x && myHead.y + 1 === segment.y) {
      isMoveSafe.up = false;
    }
    if (myHead.x === segment.x && myHead.y - 1 === segment.y) {
      isMoveSafe.down = false;
    }
    if (myHead.x - 1 === segment.x && myHead.y === segment.y) {
      isMoveSafe.left = false;
    }
    if (myHead.x + 1 === segment.x && myHead.y === segment.y) {
      isMoveSafe.right = false;
    }
  }
  return isMoveSafe;
}