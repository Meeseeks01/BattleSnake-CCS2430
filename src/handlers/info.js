// info is called when you create your Battlesnake on play.battlesnake.com
// and controls your Battlesnake's appearance
// TIP: If you open your Battlesnake URL in a browser you should see this data
export default function info() {
    console.log("INFO");
  //BattleSnake appearance!!!
    return {
      apiversion: "1",
      author: "",       // TODO: Your Battlesnake Username
      color: "#888888", // TODO: Choose color
      head: "default",  // TODO: Choose head
      tail: "default",  // TODO: Choose tail
    };
  }