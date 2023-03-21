//1. The game loop should set up a new game by creating Players and Gameboards.
import "./style.css";
import Player from "./factories/player";

function game() {
  //game players
  // let player = new Player("player");
  let computer = new Player("computer");
  // place ships
  placeShipsGame(computer);
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
const placeShipsGame = (target) => {
  if (target.name === "computer") {
    let shipsArray = target.playerBoard.shipsArray;
    shipsArray.forEach((eachShip) => {
      console.log(eachShip);
      let coordArrayLength = eachShip.coordPairs.length;
      if (coordArrayLength === 0) {
        let randomDirection = target.getRandomDirection()
        let ranX = target.getRandomX();
        let ranY = target.getRandomY();
        let pushLength = eachShip.ship.length;
        console.log(
          `ship length: ${pushLength}, random X: ${ranX}, random Y: ${ranY}, random direction: ${randomDirection}`
        );
        target.placePlayerShip(pushLength, ranX, ranY, randomDirection);
      }
    });
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

game();
