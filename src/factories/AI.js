import Gameboard from "./gamboard";

export default class AI {
  constructor(name) {
    this.name = name;
    this.playerBoard = new Gameboard();
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
  receiveShotFromPlayer(myTarget, myX, myY) {
    myTarget.playerBoard.receiveAttack(myX, myY);
  }
  shootEnemyRandom(myTarget) {
    let hitX = this.getRandomNum();
    let hitY = this.getRandomNum();
    myTarget.playerBoard.receiveAttack(hitX, hitY);
  }
  receiveShotFromAI() {
    let hitX = this.getRandomNum();
    let hitY = this.getRandomNum();
    this.playerBoard.receiveAttack(hitX, hitY);
  }
}
