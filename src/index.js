//1. The game loop should set up a new game by creating Players and Gameboards.
import "./style.css";
import AI from "./factories/AI";
import Player from "./factories/player";
import Gameboard from "./factories/gamboard";
function game() {
  // let player = new Player("player");
  let computer = new AI();
  // place ships
  placeShipsInGame(computer);
  // init boards
  renderBoard(computer);
  //new game
  let newGame = document.querySelector(".new-game");
  newGame.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("works");
    resetBoards(computer);
  });
}
const placeShipsInGame = (targetPlayerBoard) => {
  if (targetPlayerBoard.name === "computer") {
    targetPlayerBoard.placeRandomShips();
  }
};
const renderBoard = (target) => {
  let targetArray = target.playerBoard.board; //select the correct board
  let targetString = target.name;
  const targetAppend = document.querySelector(`.${targetString}-array`);
  targetArray.forEach((row) => {
    const createdRow = document.createElement("div");
    row.forEach((cell) => {
      const createdCell = document.createElement("div");
      createdCell.innerText = cell;
      createdRow.appendChild(createdCell);
    });
    targetAppend.appendChild(createdRow);
  });
};

const resetBoards = (target) => {
  console.log("getshere");
  let targetString = target.name;
  const targetClear = document.querySelector(`.${targetString}-array`);
};
// For now just populate each Gameboard with predetermined coordinates.
// You can implement a system for allowing players to place their ships later
// You should display both the player’s boards and render them using information from the Gameboard class.
// You need methods to render the gameboards and to take user input for attacking.
// For attacks, let the user click on a coordinate in the enemy Gameboard
