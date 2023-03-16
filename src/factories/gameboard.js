const gameboard = (size) => {
  let gameboard = [];
  let rows = size;
  let columns = size;
  for (let i = 0; i < rows; i++) {
    gameboard[i] = [];
    for (let j = 0; j < columns; j++) {
      gameboard[i][j] = j;
    }
  }
  return gameboard;
};

export default gameboard;