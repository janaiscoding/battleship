import Gameboard from "./gamboard";

export default class AI {
  constructor(name) {
    this.name = name;
    this.playerBoard = new Gameboard();
    this.AIPastShots = [];
    this.placeRandomShips();
  }
  getRandomX() {
    let xRan = this.getRandomNum();
    return xRan;
  }
  getRandomY() {
    let yRan = this.getRandomNum();
    return yRan;
  }
  getRandomNum() {
    return Math.floor(Math.random() * 10);
  }
  getRandomDirection() {
    return Math.random() < 0.5 ? "V" : "H";
  }
  placeRandomShips() {
    let targetArray = this.playerBoard.shipsArray;
    targetArray.forEach((currentShip) => {
      let isShipPlaced = currentShip.coordPairs.length;
      while (isShipPlaced === 0) {
        let randomDirection = this.getRandomDirection();
        let ranX = this.getRandomX();
        let ranY = this.getRandomY();
        let pushLength = currentShip.ship.length;
        this.playerBoard.placeShip(pushLength, ranX, ranY, randomDirection);
        isShipPlaced = currentShip.coordPairs.length;
      }
    });
  }
  computerShot(myTarget) {
    let shotExists = false;
    let hitX = this.getRandomNum();
    let hitY = this.getRandomNum();
    let pairOfShot = [hitX, hitY];
    if (this.AIPastShots.includes(pairOfShot)) {
      shotExists = true;
      hitX = this.getRandomNum();
      hitY = this.getRandomNum();
      pairOfShot = [hitX, hitY];
    }
    if (!shotExists) {
      myTarget.playerBoard.receiveAttack(hitX, hitY);
      this.AIPastShots.push(pairOfShot);
    }
  }
}
