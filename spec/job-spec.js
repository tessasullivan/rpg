import { Wizard, Warrior } from './../src/job';
describe('Job', function() {
  it('should access fireball damage', function() {
    let job1 = new Wizard("Tim");
    expect(job1.skills.fireball.damage).toEqual(5); 
  });

});

describe('Warrior', function() {
  it('should access cleave.damage', function(){
    let job2 = new Warrior("Drogar");
    expect(job2.skills.cleave.damage).toEqual(30);
  });

  it('should have strength of 15', function() {
    let warrior1 = new Warrior("Bob");
    expect (warrior1.str).toEqual(15);
  });
});