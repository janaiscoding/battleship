import Gameboard from "./factories/gamboard";
let testBoard = new Gameboard();
testBoard.placeShip(2, 1, 1, "H");
testBoard.receiveAttack(1,1)
testBoard.receiveAttack(1,2)
// testBoard.placeShip(1, 0, 0, "H");
console.log(testBoard);
console.log("meows");
testBoard.checkAllSunk()