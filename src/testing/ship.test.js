import Ship from "../factories/ship.js";
//created ship
let newShip = new Ship(2);

it("Should create a new ship object", () => {
  expect(newShip).toBeInstanceOf(Object);
});
it("Should expect the correct length", () => {
  expect(newShip.length).toBe(2);
});
it("Should expect initial sunk status to be false", () => {
  expect(newShip.sunk).toBe(false);
});
it("Should expect initial number of hits to be set to 0", () => {
  expect(newShip.hits).toBe(0);
});

//functions tests
it("Should sink the ship when hits equal to length", () => {
  let shipTestSink = new Ship(2);
  shipTestSink.hit();
  shipTestSink.hit();
  let sunkenStatus = shipTestSink.isSunk();
  expect(sunkenStatus).toBe(true);
});

it("Should not sink the ship when hits lower than length", () => {
  let shipTestNotSink = new Ship(2, 0);
  shipTestNotSink.hit();
  let notSunkenStatus = shipTestNotSink.isSunk();
  expect(notSunkenStatus).toBe(false);
});

it("Should not allow hits higher than length", () => {
  let shipHitTest = new Ship(2, 0);
  shipHitTest.hit();
  shipHitTest.hit();
  shipHitTest.hit();
  expect(shipHitTest.hits).toBe(2);
});
