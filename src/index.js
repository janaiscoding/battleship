//1. The game loop should set up a new game by creating Players and Gameboards.
import "./style.css";
import AI from "./factories/AI";
import Player from "./factories/player";
let turn = "pT";

let shipLength = null; // let user put their ship lengths
let shipDirection = "H"; // lets user pick their ship direction

let player = new Player("player");
let computer = new AI("computer"); // AI shops are placed by default!
console.log(computer)
function game() {
//  renderAllBoards(player,computer)
}

// BOARDING AROUND HERE
const renderBoard = (boardName) => {
  let targetArray = boardName.playerBoard.board;
  const targetAppend = document.querySelector(`.${boardName.name}-array`);
  console.log(targetArray)
  targetArray.forEach((row, rowIndex) => {
    const myRow = document.createElement("div");
    myRow.classList.add("row");
    row.forEach((cell, columnIndex) => {
      const myCell = document.createElement("div");
      myCell.innerText = cell;
      myCell.classList.add("cell");
      myCell.setAttribute("data-x", rowIndex);
      myCell.setAttribute("data-y", columnIndex);

      myRow.appendChild(myCell);
    });
    targetAppend.appendChild(myRow);
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
const placeShipEvent = (e) => {
  let x = parseInt(e.target.getAttribute("data-x"));
  let y = parseInt(e.target.getAttribute("data-y"));
  target.placePlayerShip(shipLength, x, y, shipDirection);
  shipLength = null;
  updateBoard(player); //function will call   clearBoard(player); and render board
};

// calling the board render twice on each gamestart
const renderAllBoards = (target1, target2) => {
  renderBoard(target1);
  renderBoard(target2);
}

const clearBoard = (boardName) => {
  const targetClear = document.querySelector(`.${boardName}-array`);
  targetClear.innerHTML = ""; //it will clear the dom
};

//new game button
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
const directionSelector = document.querySelector(".player-direction");
directionSelector.addEventListener("click", () => {
  if (directionSelector.innerText === "H") {
    shipDirection = "V";
    directionSelector.innerText = "V";
  } else if (directionSelector.innerText === "V") {
    shipDirection = "H";
    directionSelector.innerText = "H";
  }
  console.log(shipDirection);
});
game()