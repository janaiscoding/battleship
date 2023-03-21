//Create Player.
//Players can take turns playing the game by attacking the enemy Gameboard.
//The game is played against the computer, so make ‘computer’ players capable of making random plays. The AI does not have to be smart, but it should know whether or not a given move is legal. (i.e. it shouldn’t shoot the same coordinate twice).
import Gameboard from "./gamboard";

export default class Player {
  constructor(name) {
    this.name = name;
    this.playerBoard = new Gameboard();
  }
  placePlayerShip(newL, newX, newY, newD) {
    this.playerBoard.placeShip(newL, newX, newY, newD);
  }
  shootEnemy(myTarget, myX, myY) {
    myTarget.playerBoard.receiveAttack(myX, myY);
  }
}
