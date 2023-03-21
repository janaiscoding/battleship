import Player from "../factories/player";
import Ship from "../factories/ship";

let Jana = new Player("Jana");
let Enemy = new Player("Enemy");

it("Should create a new player object", () => {
  expect(Jana).toBeInstanceOf(Object);
});

it("Should be able to place a ships on its board", () => {
  Jana.playerBoard.placeShip(5, 0, 5, "H");
  Jana.playerBoard.placeShip(4, 1, 5, "V");
  expect(Jana.playerBoard.board).toEqual([
    ["o", "o", "o", "o", "o", "H", "H", "H", "H", "H"],
    ["o", "o", "o", "o", "o", "V", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "V", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "V", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "V", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ]);
});

it("Should be able to throw a random attack on an enemy board", () => {
  let myX = Jana.getRandomShotX();
  let myY = Jana.getRandomShotY();
  Enemy.playerBoard.receiveAttack(myX, myY);
  expect(Enemy.playerBoard.board[myX][myY]).toEqual("x");
});
