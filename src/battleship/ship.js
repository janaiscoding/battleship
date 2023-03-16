export default class Ship {
  constructor(length, hits) {
    this.length = length;
    this.hits = hits;
    this.sunk = false;
  }
  hit() {
    return this.hits++;
  }
  isSunk() {
    if(this.length === this.hits)
    return this.sunk = true;
  }
}
