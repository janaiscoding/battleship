import Gameboard from "./gamboard";

export default class Player {
  constructor(name) {
    this.name = name;
    this.playerBoard = new Gameboard();
  }
  placePlayerShip(newL, newX, newY, newD) {
    this.playerBoard.placeShip(newL, newX, newY, newD);
  }
  playerShot(myTarget, myX, myY) {
    myTarget.playerBoard.receiveAttack(myX, myY);
  }
}
