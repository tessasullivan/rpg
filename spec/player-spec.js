import { Entity } from '../src/Entity.js';

describe('Entity', function() {
  it('should test entity constructor', function() {
    let player1 = new Entity("joe");
    expect(player1.name).toEqual("joe");
  });
});