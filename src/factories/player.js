import Gameboard from "./gamboard";

export default class Player {
  constructor(name) {
    this.name = name;
    this.playerBoard = new Gameboard();
  }
  placePlayerShip(newL, newX, newY, newD) {
    this.playerBoard.placeShip(newL, newX, newY, newD);
  }
  // support for receiving random attack
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
  receiveShotFromAI() {
    let hitX = this.getRandomNum();
    let hitY = this.getRandomNum();
    this.playerBoard.receiveAttack(hitX, hitY);
  }
}
