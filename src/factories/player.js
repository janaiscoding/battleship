//Create Player.
//Players can take turns playing the game by attacking the enemy Gameboard.
//The game is played against the computer, so make ‘computer’ players capable of making random plays. The AI does not have to be smart, but it should know whether or not a given move is legal. (i.e. it shouldn’t shoot the same coordinate twice).
import Gameboard from "./gamboard";

export default class Player {
  constructor(name) {
    this.name = name;
    this.playerBoard = new Gameboard();
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
  placePlayerShip(l, x, y, d) {
    this.playerBoard.placeShip(l, x, y, d);
  }
  shootEnemy(myTarget, myX, myY) {
    myTarget.playerBoard.receiveAttack(myX, myY);
  }
}
