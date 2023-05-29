import Gameboard from "./gamboard";

export default class Player {
  constructor(name) {
    this.name = name;
    this.playerBoard = new Gameboard();
  }
  placePlayerShip(newL, newX, newY, newD) {
    this.playerBoard.placeShip(newL, newX, newY, newD);
    let placedShips = this.playerBoard.shipsArray.filter(
      (ship) => ship.coordPairs.length > 0
    );
    placedShips.forEach((ship) => {
      document.getElementById(ship.coordPairs.length).style.backgroundColor = "#70717c";
      console.log("here");
    });

    console.log(this.playerBoard.shipsArray);
  }
  playerShot(myTarget, myX, myY) {
    myTarget.playerBoard.receiveAttack(myX, myY);
  }
}
