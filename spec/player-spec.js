import { Player } from '../src/Entity.js/index.js';
describe('Player', function() {
  it('should test player constructor', function() {
    let player1 = new Player("joe");
    expect(player1.name).toEqual("joe");
  });
});