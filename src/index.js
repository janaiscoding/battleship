import Gameboard from "./factories/gamboard";
let testBoard = new Gameboard();

testBoard.placeShip(5, 5, 5, "H");
testBoard.placeShip(5, 0, 0, "H");
testBoard.placeShip(4, 6, 6, "H");
testBoard.placeShip(3, 7, 7, "H");
testBoard.placeShip(2, 8, 8, "H");
testBoard.placeShip(1, 9, 9, "H");

console.log(testBoard);
console.log("meows");
testBoard.checkAllSunk()