//1. The game loop should set up a new game by creating Players and Gameboards.
import "./style.css";
import AI from "./factories/AI";
import Player from "./factories/player";
let turn = "pT";

let shipLength = null; // let user put their ship lengths
let shipDirection = "H"; // lets user pick their ship direction

let player = new Player("player");
let computer = new AI("computer"); // AI shops are placed by default! 

function game() {
  refreshGame(player, computer);
  renderAllBoards(player, computer);
  let isGameWon = checkIfWinner(player, computer);

}

// BOARDING AROUND HERE
const renderBoard = (target, handleCellClicks) => {
  let targetArray = target.playerBoard.board;
  let targetString = target.name;
  const targetAppend = document.querySelector(`.${targetString}-array`);
  targetArray.forEach((row, rowIndex) => {
    const createdRow = document.createElement("div");
    createdRow.classList.add("row");
    createdRow.id = rowIndex;
    row.forEach((cell, columnIndex) => {
      const createdCell = document.createElement("div");
      createdCell.innerText = cell;
      createdCell.classList.add("cell");
      createdCell.id = columnIndex;
      createdCell.addEventListener("click", () => {
        if (checkStatus && target.name === "computer") {
          myX = rowIndex;
          myY = columnIndex;
        } else if (!checkStatus && target.name === "player") {
          handleCellClicks(target, rowIndex, columnIndex);
          checkStatus = checkUserShips(target);
          console.log(checkStatus);
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

// swap turns
const swapTurn = (myCurrent) => {
  if (myCurrent === "pT") {
    turn = "cT";
  } else if (myCurrent === "cT") {
    turn = "pT";
  }
  return turn;
};

// condition for ending the game -- if player will hit, it checks the enemy board and vice versa
const checkIfWinner = (player, computer) => {
  let gameOver = false;
  let playerHasLost = player.playerBoard.allSunk;
  let computerHasLost = computer.playerBoard.allSunk;
  if (playerHasLost && !computerHasLost) {
    gameOver = true;
    console.log("computer has won");
  } else if (computerHasLost && !playerHasLost) {
    gameOver = true;
    console.log("player has won");
  }
  return gameOver;
};

// handler for placing ships
const handleCellClicks = (target, rowIndex, columnIndex) => {
  if (shipLength !== null) {
    target.placePlayerShip(shipLength, rowIndex, columnIndex, shipDirection);
    clearBoard(target);
    renderBoard(target, handleCellClicks);
    shipLength = null;
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

//new game
let newGame = document.querySelector(".new-game");
newGame.addEventListener("click", (e) => {
  game();
});

// DOM TOGGLE SHIPS SELECTORS
const lengthSelectors = document.querySelectorAll(".length-selector");
lengthSelectors.forEach((selector) => {
  selector.addEventListener("click", (e) => {
    shipLength = parseInt(e.target.id);
  });
});

// DOM TOGGLE DIRECTION
const playerDirection = document.querySelector(".player-direction");
playerDirection.addEventListener("click", () => {
  if (playerDirection.innerText === "H") {
    shipDirection = "V";
    playerDirection.innerText = "V";
  } else if (playerDirection.innerText === "V") {
    shipDirection = "H";
    playerDirection.innerText = "H";
  }
  console.log(shipDirection);
});

game();
let checkStatus = checkUserShips(player);
