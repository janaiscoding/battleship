import Player from "../factories/player";
import AI from "../factories/AI";
let computerPlayer = new AI();
let player = new Player("Enemy");

it("Should create a new player object", () => {
  expect(player).toBeInstanceOf(Object);
});

it("Should be able to place a ships on its own board", () => {
  player.placePlayerShip(5, 0, 5, "H");
  player.placePlayerShip(4, 1, 5, "V");
  expect(player.playerBoard.board).toEqual([
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
  let myX = computerPlayer.getRandomX();
  let myY = computerPlayer.getRandomY();
  computerPlayer.shootEnemy(player,myX,myY)
  expect(Enemy.playerBoard.board[myX][myY]).toEqual("x");
});
