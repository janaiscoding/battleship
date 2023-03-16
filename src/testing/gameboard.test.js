import gameboard from "../factories/gameboard.js";

let newGameboard = gameboard(10);

it("Should create a new gameboard array", () => {
  expect(newGameboard).toBeInstanceOf(Array);
});

it("Should create a new gameboard array", () => {
  expect(newGameboard).toBeInstanceOf(Array);
});
