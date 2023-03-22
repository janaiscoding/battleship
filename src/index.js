//1. The game loop should set up a new game by creating Players and Gameboards.
import "./style.css";
import AI from "./factories/AI";
import Player from "./factories/player";

let selectedShipLength = null;

// player turn si pentru ai turn, acum o sa ma bata un pic sa vad cum le conectez, si cum fac sa se updateze pe masura ce se joaca
function game() {
  let player = new Player("player");
  let computer = new AI();
  refreshGame(player, computer); //We clear the boards everytime
  renderAllBoards(player, computer); // Generating both boards
}

// BOARDING AROUND HERE
const renderBoard = (target, handleCellClicks) => {
  let targetArray = target.playerBoard.board;
  let targetString = target.name;
  const targetAppend = document.querySelector(`.${targetString}-array`);
  targetArray.forEach((row, rowIndex) => {
    const createdRow = document.createElement("div");
    row.forEach((cell, columnIndex) => {
      const createdCell = document.createElement("div");
      createdCell.innerText = cell;
      createdCell.addEventListener("click", () => {
        let checkStatus = checkUserShips(target);
        if (checkStatus) {
          // start turns and attacking functions
        } else {
          handleCellClicks(target, rowIndex, columnIndex);
          resetBoard(target)
          renderBoard(target,handleCellClicks)
          //place player ships
        }
        //   console.log(`Clicked on cell [${rowIndex}][${columnIndex}]`); // x = row, y = column
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

const handleCellClicks = (target, rowIndex, columnIndex) => {
  if (selectedShipLength !== null) {
    // place the ship on the player class
    target.placePlayerShip(selectedShipLength, rowIndex, columnIndex, "H");
    //reset length
    selectedShipLength = null;
  } else {
    // target the enemy board
  }
  
};

// calling the board render twice on each gamestart
const renderAllBoards = (target1, target2) => {
  renderBoard(target1, handleCellClicks);
  renderBoard(target2, handleCellClicks);
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

// DOM TOGGLE SHIPS SELECTORS
const lengthSelectors = document.querySelectorAll(".length-selector");
lengthSelectors.forEach((selector) => {
  selector.addEventListener("click", (e) => {
    selectedShipLength = parseInt(e.target.id);
  });
});

game();
// For now just populate each Gameboard with predetermined coordinates.
// You can implement a system for allowing players to place their ships later
// You should display both the player’s boards and render them using information from the Gameboard class.
// You need methods to render the gameboards and to take user input for attacking.
// For attacks, let the user click on a coordinate in the enemy Gameboard
//new game
let newGame = document.querySelector(".new-game");
newGame.addEventListener("click", (e) => {
  game();
});
