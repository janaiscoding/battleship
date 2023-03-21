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
  computerPlayer.shootEnemyRandom(player);
  let checkMissedHits = player.playerBoard.hitCoords.missedHits;
  expect(checkMissedHits.length).toEqual(1);
  //always a miss because player board is empty
});
