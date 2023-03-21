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

it("Should be able to throw precisely attack enemy board", () => {
  player.shootEnemy(computerPlayer,0,5);
  expect(computerPlayer.playerBoard.board[0][5]).not.toEqual("o");
  //may be missed hit or ship hit
});
