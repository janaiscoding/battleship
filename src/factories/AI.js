import Gameboard from "./gamboard";

export default class AI {
  constructor() {
    this.name = "computer";
    this.playerBoard = new Gameboard();
    this.AIShips = this.placeRandomShips();
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
    targetArray.forEach((curentShip) => {
      while (curentShip.coordPairs.length === 0) {
        let randomDirection = this.getRandomDirection();
        let ranX = this.getRandomX();
        let ranY = this.getRandomY();
        let pushLength = curentShip.ship.length;
        this.playerBoard.placeShip(pushLength, ranX, ranY, randomDirection);
      }
    });
  }
  shootEnemyRandom(myTarget) {
    let hitX = this.getRandomNum();
    let hitY = this.getRandomNum();
    myTarget.playerBoard.receiveAttack(hitX, hitY);
  }
}
