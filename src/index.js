import Gameboard from "./factories/gamboard";
let testBoard = new Gameboard();

testBoard.placeShip(2, 1, 1, "H");
// l5 = [0], l4 = [1],l3 = [2],l2 = [3],l1 = [4]
testBoard.receiveAttack(1, 1);
testBoard.receiveAttack(1, 2);
console.log(testBoard);
console.log("meows");
console.log(testBoard.shipsArray[3].ship.sunk)
testBoard.checkAllSunk()