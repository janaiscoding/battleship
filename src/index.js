//1. The game loop should set up a new game by creating Players and Gameboards.
import "./style.css";
import AI from "./factories/AI";
import Player from "./factories/player";
let turn = "pT";
let selectedShipLength = null;

function game() {
  let player = new AI("player");
  let computer = new AI("computer");
  refreshGame(player, computer);
  renderAllBoards(player, computer);
  let isGameWon = checkIfWinner(player, computer);

  while (!isGameWon) {
    if (turn === "pT") {
      player.shootEnemyRandom(computer);
      swapTurn("pT");
    } else if (turn === "cT") {
      computer.shootEnemyRandom(player);
      swapTurn("cT");
    }
    isGameWon = checkIfWinner(player, computer);
  }
  let hasDuplicate = player.AIPastShots.some(
    (val, i) => player.AIPastShots.indexOf(val) !== i
  );
  let hasDuplicate2 = computer.AIPastShots.some(
    (val, i) => computer.AIPastShots.indexOf(val) !== i
  );
  console.log(hasDuplicate, hasDuplicate2);
  console.log(player.playerBoard.board);
  console.log(computer.playerBoard.board);
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
  let playerHasLost = player.playerBoard.allSunk; // all player ships sunk = boolean
  let computerHasLost = computer.playerBoard.allSunk; // all player ships sunk = boolean
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
