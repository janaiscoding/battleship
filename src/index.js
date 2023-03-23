//1. The game loop should set up a new game by creating Players and Gameboards.
import "./style.css";
import AI from "./factories/AI";
import Player from "./factories/player";
const computerBoard = document.querySelector(".computer-array");
const playerBoard = document.querySelector(".player-array");
const canStartGame = document.querySelector(".can-start");
const winnerLabel = document.querySelector(".winner");

let player = new Player("player");
let computer = new AI("computer");
let shipLength = null;
let shipDirection = "V";

const game = () => {
  player = new Player("player");
  computer = new AI("computer");
  gameStart();
};

const gameStart = () => {
  clearBoard(player);
  renderBoard(player);
  clearBoard(computer);
  renderBoard(computer);
};

const renderBoard = (boardName) => {
  let targetArray = boardName.playerBoard.board;
  const targetAppend = document.querySelector(`.${boardName.name}-array`);
  targetArray.forEach((row, rowIndex) => {
    const myRow = document.createElement("div");
    myRow.classList.add("row");
    row.forEach((cell, columnIndex) => {
      const myCell = document.createElement("div");
      myCell.classList.add("cell");
      myCell.setAttribute("data-x", rowIndex);
      myCell.setAttribute("data-y", columnIndex);
      let thisCell = targetArray[rowIndex][columnIndex];
      if (thisCell === "x") {
        myCell.classList.add("unclickable");
        myCell.classList.add("missed-hit");
      } else if (thisCell === "s-x") {
        myCell.classList.add("unclickable");
        myCell.classList.add("correct-hit");
      }
      myRow.appendChild(myCell);
      if (boardName.name === "computer") {
        myCell.addEventListener("click", (e) => {
          if (thisCell !== "x" || thisCell !== "s-x") {
            attackEvent(e);
            updateBoard(boardName);
          }
        });
      }
      if (boardName.name === "player") {
        if (thisCell === "H") {
          myCell.classList.add("ship-style");
          myCell.classList.add("invalid-placement");
        } else if (thisCell === "V") {
          myCell.classList.add("ship-style");
          myCell.classList.add("invalid-placement");
        }
        myCell.addEventListener("click", (e) => {
          e.preventDefault();
          placeShipEvent(e);
          updateBoard(boardName);
        });
      }
    });
    targetAppend.appendChild(myRow);
  });
};

// Condition for knowing when player can start shooting
const checkPlayerShips = () => {
  let targetCheck = player.playerBoard.shipsArray;
  let response = targetCheck.every((ship) => ship.coordPairs.length > 0);
  return response;
};

//handler for attacking enemy
const attackEvent = (e) => {
  let x = parseInt(e.target.getAttribute("data-x"));
  let y = parseInt(e.target.getAttribute("data-y"));
  let canAttack = checkPlayerShips();
  if (canAttack) {
    //player turn
    player.playerShot(computer, x, y);
    if (computer.playerBoard.allSunk) {
      endGame(player);
    }
    // ai turn
    computer.computerShot(player);
    updateBoard(player);
    if (player.playerBoard.allSunk) {
      endGame(computer);
    }
  }
};

//end game handler
const endGame = (winnerName) => {
  computerBoard.classList.add("unclickable");
  winnerLabel.style.display = "block";
  winnerLabel.innerText = `Our winner is ${winnerName.name}`;
};
// handler for placing ships
const placeShipEvent = (e) => {
  let x = parseInt(e.target.getAttribute("data-x"));
  let y = parseInt(e.target.getAttribute("data-y"));
  player.placePlayerShip(shipLength, x, y, shipDirection);
  let allShipsPlaced = checkPlayerShips();
  if (allShipsPlaced) {
    canStartGame.style.display = "block";
    computerBoard.classList.remove("unclickable");
    playerBoard.classList.add("unclickable");
  }
  shipLength = null;
};

const clearBoard = (board) => {
  const targetDiv = board.name;
  const targetClear = document.querySelector(`.${targetDiv}-array`);
  targetClear.innerHTML = "";
};

const updateBoard = (board) => {
  clearBoard(board);
  renderBoard(board);
};

//new game button
let newGame = document.querySelector(".new-game");
newGame.addEventListener("click", () => {
  playerBoard.classList.remove("unclickable");
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
const directionSelector = document.querySelector(".player-direction");
directionSelector.addEventListener("click", () => {
  if (directionSelector.innerText === "H") {
    shipDirection = "V";
    directionSelector.innerText = "V";
  } else if (directionSelector.innerText === "V") {
    shipDirection = "H";
    directionSelector.innerText = "H";
  }
});

game();
import Gameboard from "./factories/gamboard";
let testBoard = new Gameboard();
testBoard.placeShip(5, 0, 5, "V");
testBoard.placeShip(4, 1, 5, "H");
testBoard.placeShip(2, 1, 1, "H");

// l5 = [4], l4 = [3],l3 = [2],l2 = [1],l1 = [0]
testBoard.receiveAttack(1, 1);
testBoard.receiveAttack(2, 1);

testBoard.receiveAttack(1, 5);
testBoard.receiveAttack(2, 5);
testBoard.receiveAttack(3, 5);
testBoard.receiveAttack(4, 5);
testBoard.receiveAttack(0, 5);
testBoard.receiveAttack(0, 6);
testBoard.receiveAttack(0, 7);
testBoard.receiveAttack(0, 8);
testBoard.receiveAttack(0, 9);
console.log(testBoard.board)