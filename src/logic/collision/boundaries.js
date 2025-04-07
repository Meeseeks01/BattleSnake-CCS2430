export default function checkWallCollision(gameState, isMoveSafe) {
    //BPC-6 2 Prevent Wall Collisions in Movement Logic
   const myHead = gameState.you.head;  
   const boardWidth = gameState.board.width; //already existed
   const boardHeight = gameState.board.height; //already existed

   if (myHead.x === 0) {
       isMoveSafe.left = false; // it prevents to go left
   }
   if (myHead.x === boardWidth - 1) {
       isMoveSafe.right = false; // it prevents to go right
   }
   if (myHead.y === 0) {
       isMoveSafe.down = false; // it prevents to go down
   }
   if (myHead.y === boardHeight - 1) {
       // because height is equal to position 10 + 0 =11
       isMoveSafe.up = false; // it prevents to go up
   }

    return isMoveSafe;
  }