// Gameboard Factory


// OLD CODE
const createBoard = (size) => {
  let board = [];
  for (let i = 0; i < size; i++) {
    board[i] = [];
    for (let j = 0; j < size; j++) {
      board[i][j] = "o";
    }
  }
  return board;
};

//2. Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
//saved old
const placeShip = (b, l, x, y, d) => {
  if (d === "V") {
    let columnValid = true;
    for (let i = x; i < x + l; i++) {
      if (b[i][y] !== "o") {
        columnValid = false;
        break;
      }
    }
    if (columnValid) {
      while (l !== 0 && l < 6 && x + l < 11 && y + l < 11) {
        b[x][y] = "V";
        x++;
        l--;
      }
      return b;
    }
  } else if (d === "H") {
    let rowValid = true;
    for (let j = y; j < y + l; j++) {
      if (b[x][j] !== "o") {
        rowValid = false;
        break;
      }
    }
    if (rowValid) {
      while (l !== 0 && l < 6 && x + l < 11 && y + l < 11) {
        b[x][y] = "H";
        y++;
        l--;
      }
      return b;
    }
  }
};
//Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
const receiveAttack = (b, x, y, h) => {};
//Gameboards should keep track of missed attacks so they can display them properly.

//Gameboards should be able to report whether or not all of their ships have been sunk.
export { createBoard, placeShip };
