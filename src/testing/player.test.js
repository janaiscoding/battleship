import Player from "../factories/player";

it("Should create a new player object", () => {
    let newPlayer = new Player('Jana') 

    expect(newPlayer).toBeInstanceOf(Object);
  });