// info is called when you create your Battlesnake on play.battlesnake.com
// and controls your Battlesnake's appearance
// TIP: If you open your Battlesnake URL in a browser you should see this data
export default function info() {
    console.log("INFO");
  //BattleSnake appearance!!!
    return {
      apiversion: "1",
      author: "El",       // TODO: Your Battlesnake Username
      color: "#ff831d", // TODO: Choose color
      head: "evil",  // TODO: Choose head
      tail: "curled",  // TODO: Choose tail
    };
  }