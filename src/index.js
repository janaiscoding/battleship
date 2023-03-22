//1. The game loop should set up a new game by creating Players and Gameboards.
import "./style.css";
import AI from "./factories/AI";
import Player from "./factories/player";
import Gameboard from "./factories/gamboard";

// player turn si pentru ai turn, acum o sa ma bata un pic sa vad cum le conectez, si cum fac sa se updateze pe masura ce se joaca
function game() {
  let player = new Player("player");
  let computer = new AI();
  refreshGame(player, computer); //We clear the boards everytime
  renderAllBoards(player, computer); // Generating the new boards
  console.log(computer.playerBoard);
}
const placeDummyShip = (player, x, y) => {
  const carrierSelector = document.querySelector(".player-carrier");
  const battleShipSelector = document.querySelector(".player-battleship");
  const destroyerSelector = document.querySelector(".player-destroyer");
  const submarineSelector = document.querySelector(".player-submarine");
  const patrolBoatSelector = document.querySelector(".player-patrol-boat");
  // on clicks we setL for ships
  x = getXIndex();
  y = getYIndex();
  console.log(x, y);
};
const carrierSelector = document.querySelector(".player-carrier");
carrierSelector.addEventListener("click", () => {
  //when i click a selector, first i get the length of the ship
  let l = 5;
  //then i am prompted to set the indexes
  let x = setYourX();
  let y = setYourY();
});

// singular board render
const renderBoard = (target, getXIndex, getYIndex) => {
  let targetArray = target.playerBoard.board;
  let targetString = target.name;
  const targetAppend = document.querySelector(`.${targetString}-array`);
  targetArray.forEach((row, rowIndex) => {
    const createdRow = document.createElement("div");
    row.forEach((cell, columnIndex) => {
      const createdCell = document.createElement("div");
      createdCell.innerText = cell;
      createdCell.addEventListener("click", () => {
        console.log(target)
        let checkStatus = checkUserShips(target)
        console.log(checkStatus)
        if (checkStatus) {
          console.log(checkUserShips)
          // start turns and attacking functions
          // } else {
          // place player ships
        }
        console.log(`Clicked on cell [${rowIndex}][${columnIndex}]`); // x = row, y = column
      });
      createdRow.appendChild(createdCell);
    });
    targetAppend.appendChild(createdRow);
  });
};
const checkUserShips = (target) => {
  let targetCheck = target.playerBoard.shipsArray;
  //returns true if all ships are placed
  let response = targetCheck.every((ship) => ship.coordPairs.length > 0);
  return response;
};

const getXIndex = (rowIndex) => {
  return rowIndex;
};
const getYIndex = (columnIndex) => {
  return columnIndex;
};
// calling the board render twice on each gamestart
const renderAllBoards = (target1, target2) => {
  renderBoard(target1, getXIndex, getYIndex);
  renderBoard(target2, getXIndex, getYIndex);
};

const resetBoard = (target) => {
  let targetString = target.name;
  const targetClear = document.querySelector(`.${targetString}-array`);
  targetClear.innerHTML = ""; //it will clear the dom
};
const refreshGame = (target1, target2) => {
  resetBoard(target1);
  resetBoard(target2);
};

game();
// For now just populate each Gameboard with predetermined coordinates.
// You can implement a system for allowing players to place their ships later
// You should display both the player’s boards and render them using information from the Gameboard class.
// You need methods to render the gameboards and to take user input for attacking.
// For attacks, let the user click on a coordinate in the enemy Gameboard
//new game
let newGame = document.querySelector(".new-game");
newGame.addEventListener("click", (e) => {
  console.log("works");
  game();
});