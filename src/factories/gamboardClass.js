import Ship from "./ship";
export default class Gameboard {
  constructor() {
    this.board = [
      ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ]; //default board
    this.shipsArray = []; // array will be filled with each ship and it's coordonates
    this.hitCoords = {
      missedHits: [],
      shipHits: [],
    };
  }

  placeShip(l, x, y, d) {
    if (d === "V") {
      let columnValid = true;
      for (let i = x; i < x + l; i++) {
        if (this.board[i][y] !== "o") {
          columnValid = false;
          break;
        }
      }
      if (columnValid) {
        let coordPairs = [];
        let pushedShip = new Ship(l);
        this.shipsArray.push({
          ship: pushedShip,
          coordPairs: coordPairs,
        });
        while (l !== 0 && l < 6 && x + l < 11 && y + l < 11) {
          this.board[x][y] = "V";
          coordPairs.push({ x, y });
          x++;
          l--;
        }

        return this.board;
      }
    } else if (d === "H") {
      let rowValid = true;
      for (let j = y; j < y + l; j++) {
        if (this.board[x][j] !== "o") {
          rowValid = false;
          break;
        }
      }
      if (rowValid) {
        let coordPairs = [];
        let pushedShip = new Ship(l);
        this.shipsArray.push({
          ship: pushedShip,
          coordPairs: coordPairs,
        });
        while (l !== 0 && l < 6 && x + l < 11 && y + l < 11) {
          this.board[x][y] = "H";
          coordPairs.push({ x, y });
          y++;
          l--;
        }
        return this.board;
      }
    }
  }

  receiveAttack(xHit, yHit) {
    // handle for pushing all the hits
    let allowedHit = false;
    let shipHit = false; // checking for ship specific hit
    // i see if it has an attack already
    if (this.board[xHit][yHit] !== "x" && this.board[xHit][yHit] !== "s-x") {
      //if hit is empty
      allowedHit = true;
    }
    // i check if the actual hit is also a ship -> marked with s-x
    this.shipsArray.forEach((oneShip) => {
      for (let i = 0; i < oneShip.coordPairs.length; i++) {
        console.log(oneShip.coordPairs[i]);
        if (
          oneShip.coordPairs[i].x == xHit &&
          oneShip.coordPairs[i].y == yHit
        ) {
          shipHit = true;
          // yes that's a hot ass hit baby!
          oneShip.ship.hit();
          //  checkSunk()
        }
      }
    });
    if (shipHit && allowedHit) {
      this.board[xHit][yHit] = "s-x";
      this.hitCoords.shipHits.push({ xHit, yHit });
    }
    if (!shipHit && allowedHit) {
      //store the hit pair
      this.board[xHit][yHit] = "x";
      this.hitCoords.missedHits.push({ xHit, yHit });
    }
  }
}

//Gameboards should keep track of missed attacks so they can display them properly. peepoChecked. - marked with x

//Gameboards should be able to report whether or not all of their ships have been sunk.
