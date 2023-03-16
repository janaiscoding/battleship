export default class Ship {
  constructor(length, hits = 0) {
    this.length = length;
    this.hits = hits;
    this.sunk = false;
  }
  hit() {
    if (this.hits === this.length) {
      return;
    }
    else return this.hits++;
  }
  isSunk() {
    if (this.length === this.hits) {
      return (this.sunk = true);
    } else return (this.sunk = false);
  }
}
