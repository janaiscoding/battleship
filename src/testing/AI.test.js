import Player from "../factories/player";
import AI from "../factories/AI";

let computerPlayer = new AI();
let player = new Player("Enemy");

it("Should create a new AI object", () => {
  expect(computerPlayer).toBeInstanceOf(Object);
});

it("Should expect a pre-filled board with 5 ships", () => {
  let AIBoard = computerPlayer.playerBoard.shipsArray;
  let checkBoard = AIBoard.every((ship) => ship.coordPairs.length > 0);
  expect(checkBoard).toBeTruthy();
});

it("Should be able to throw a random attack on the enemy board", () => {
  computerPlayer.computerShot(player);
  let checkMissedHits = player.playerBoard.hitCoords.missedHits;
  expect(checkMissedHits.length).toEqual(1);
  //always a miss because player board is empty
});

it("Should be able to win against an enemy within maximum 121 shots (11 x 11)", () => {
  //placing random ship
  player.placePlayerShip(5, 0, 0, "H");
  let isPlayerSunk = player.playerBoard.allSunk;
  //continue shooting until player is sunk
  while (!isPlayerSunk) {
    computerPlayer.computerShot(player);
    isPlayerSunk = player.playerBoard.allSunk;
  }
  let counter = computerPlayer.AIPastShots.length;
  expect(isPlayerSunk).toBeTruthy();
  expect(counter).toBeLessThanOrEqual(121);
});

it("Should never hit in the same place", () => {
  let shots = computerPlayer.AIPastShots;
  function hasDuplicates(array) {
    return new Set(array).size !== array.length;
  }
  expect(hasDuplicates(shots)).toBeFalsy();
});
