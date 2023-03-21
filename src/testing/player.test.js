import Player from "../factories/player";

let Jana = new Player("Jana");
let Enemy = new Player("Enemy");

it("Should create a new player object", () => {
  expect(Jana).toBeInstanceOf(Object);
});

it("Should be able to place a ships on its own board", () => {
  Jana.placePlayerShip(5, 0, 5, "H");
  Jana.placePlayerShip(4, 1, 5, "V");
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

it("Should be able to throw a random attack on a target enemy board", () => {
  let myX = Jana.getRandomX();
  let myY = Jana.getRandomY();
  Jana.shootEnemy(Enemy,myX,myY)
  expect(Enemy.playerBoard.board[myX][myY]).toEqual("x");
});
