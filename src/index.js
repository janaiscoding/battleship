//1. The game loop should set up a new game by creating Players and Gameboards.
import "./style.css";
import AI from "./factories/AI";
import Player from "./factories/player";

let selectedShipLength = null;
let turn = "pT";

function game() {
  let player = new AI("player");
  let computer = new AI("computer");
  refreshGame(player, computer);
  renderAllBoards(player, computer);
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
        console.log(checkStatus);
        if (checkStatus) {
          //game can start
        } else {
          handleCellClicks(target, rowIndex, columnIndex); // keep placing ships
        }
      });
      createdRow.appendChild(createdCell);
    });
    targetAppend.appendChild(createdRow);
  });
};

// Condition for knowing when i can start shooting
const checkUserShips = (target) => {
  let targetCheck = target.playerBoard.shipsArray;
  let response = targetCheck.every((ship) => ship.coordPairs.length > 0);
  return response;
};

//main game loop
const gameLogic = () => {
  let isGameWon = checkIfWinner(target);
  while (!isGameWon) {
    // do player move
    doPlayerMove();
    // swap turns
    // do computer move
    // check if winner
    checkIfWinner(target);
    // swap turns
  }
};
// swap turns
const swapTurn = (ct) => {
  ct === "pT" ? (ct = "cT") : (ct = "pT");
};

// condition for ending the game -- if player will hit, it checks the enemy board and vice versa
const checkIfWinner = (target) => {
  let loserBoard = target.playerBoard.allSunk;
  if (loserBoard) {
    if (target.name === "computer") {
      console.log("player has won");
    } else console.log("computer has won");
  }
  return target.playerBoard.allSunk;
};

// handler for placing ships
const handleCellClicks = (target, rowIndex, columnIndex) => {
  if (selectedShipLength !== null) {
    target.placePlayerShip(selectedShipLength, rowIndex, columnIndex, "H");
    clearBoard(target);
    renderBoard(target, handleCellClicks);
    selectedShipLength = null;
  }
};

// calling the board render twice on each gamestart
const renderAllBoards = (target1, target2) => {
  renderBoard(target1, handleCellClicks);
  renderBoard(target2, handleCellClicks);
};

const clearBoard = (target) => {
  let targetString = target.name;
  const targetClear = document.querySelector(`.${targetString}-array`);
  targetClear.innerHTML = ""; //it will clear the dom
};

const refreshGame = (target1, target2) => {
  clearBoard(target1);
  clearBoard(target2);
};

game();

//new game
let newGame = document.querySelector(".new-game");
newGame.addEventListener("click", (e) => {
  game();
});
// DOM TOGGLE SHIPS SELECTORS
const lengthSelectors = document.querySelectorAll(".length-selector");
lengthSelectors.forEach((selector) => {
  selector.addEventListener("click", (e) => {
    selectedShipLength = parseInt(e.target.id);
  });
});
