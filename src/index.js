import Gameboard from "./factories/gamboardClass";
let testBoard = new Gameboard();
testBoard.placeShip(5, 0, 5, "H");
testBoard.placeShip(4, 1, 5, "V");
testBoard.receiveAttack(0, 0);
testBoard.receiveAttack(0, 5);
console.log(testBoard);
console.log("meows");
