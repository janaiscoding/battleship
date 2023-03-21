import Player from "../factories/player";

it("Should create a new player object", () => {
    let newPlayer = new Player('Jana') 
    console.log(newPlayer)
    expect(newPlayer).toBeInstanceOf(Object);
  });