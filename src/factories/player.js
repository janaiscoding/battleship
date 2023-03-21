//Create Player.
//Players can take turns playing the game by attacking the enemy Gameboard.
//The game is played against the computer, so make ‘computer’ players capable of making random plays. The AI does not have to be smart, but it should know whether or not a given move is legal. (i.e. it shouldn’t shoot the same coordinate twice).
import Gameboard from "./gamboard";

export default class Player {
  constructor(name) {
    this.name = name;
    this.board = new Gameboard();
  }
  getRandomShot() {
    xRan = this.getRandomMove();
    yRan = this.getRandomMove();
    return { xRan, yRan };
  }
  getRandomMove() {
    return Math.floor(Math.random() * 100);
  }
}
