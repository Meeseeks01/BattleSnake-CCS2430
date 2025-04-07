
import checkWallCollision from '../logic/collision/boundaries.js';
import checkSelfCollision from '../logic/collision/selfCollision.js';
import checkOtherSnakesCollision from '../logic/collision/otherSnakes.js';

// move is called on every turn and returns your next move
// Valid moves are "up", "down", "left", or "right"
// See https://docs.battlesnake.com/api/example-move for available data
export default function move(gameState) {

    printBoard(gameState.board);

    let isMoveSafe = {
      up: true,
      down: true,
      left: true,
      right: true
    };
  
    // We've included code to prevent your Battlesnake from moving backwards
    const myHead = gameState.you.body[0];
    const myNeck = gameState.you.body[1];
  
    if (myNeck.x < myHead.x) {        // Neck is left of head, don't move left
      isMoveSafe.left = false;
  
    } else if (myNeck.x > myHead.x) { // Neck is right of head, don't move right
      isMoveSafe.right = false;
  
    } else if (myNeck.y < myHead.y) { // Neck is below head, don't move down
      isMoveSafe.down = false;
  
    } else if (myNeck.y > myHead.y) { // Neck is above head, don't move up
      isMoveSafe.up = false;
    }
  
    // TODO: Step 1 - Prevent your Battlesnake from moving out of bounds
    // boardWidth = gameState.board.width;
    // boardHeight = gameState.board.height;
    isMoveSafe = checkWallCollision(gameState, isMoveSafe);

    // TODO: Step 2 - Prevent your Battlesnake from colliding with itself
    // myBody = gameState.you.body;
    isMoveSafe = checkSelfCollision(gameState, isMoveSafe);

    // TODO: Step 3 - Prevent your Battlesnake from colliding with other Battlesnakes
    // opponents = gameState.board.snakes;
    isMoveSafe = checkOtherSnakesCollision(gameState, isMoveSafe);

  

  
    // Are there any safe moves left?
    const safeMoves = Object.keys(isMoveSafe).filter(key => isMoveSafe[key]);
    if (safeMoves.length == 0) {
      console.log(`MOVE ${gameState.turn}: No safe moves detected! Moving down`);
      return { move: "down" };
    }
  
    // Choose a random move from the safe moves
    const nextMove = safeMoves[Math.floor(Math.random() * safeMoves.length)];
  
    // TODO: Step 4 - Move towards food instead of random, to regain health and survive longer
    // food = gameState.board.food;
  
    console.log(`MOVE ${gameState.turn}: ${nextMove}`)
    return { move: nextMove };
  }

  function printBoard(board) {
    const width = board.width;
    const height = board.height;
    let grid = Array.from({ length: height }, () => Array(width).fill('.'));
  
    // Mark food on the board with adjusted y-coordinate
    board.food.forEach(({ x, y }) => {
      grid[height - 1 - y][x] = chalk.red('F');
    });
  
    // Mark snakes on the board with adjusted y-coordinate
    board.snakes.forEach(snake => {
      snake.body.forEach(({ x, y }, index) => {
        if (index === 0) {
          grid[height - 1 - y][x] = chalk.green('H'); // Snake head
        } else {
          grid[height - 1 - y][x] = chalk.blue('S'); // Snake body
        }
      });
    });
  
    // Print the board
    console.log('\n' + grid.map(row => row.join(' ')).join('\n'));
  }