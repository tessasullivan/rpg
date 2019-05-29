export class Entity {

  constructor(name){
    this.name = name;
    
    this.str = 10,// + job.str + race.str,
    this.dex = 10,// + job.dex + race.dex,
    this.intel = 10,// + job.intel + race.intel,
    this.wis = 10,// + job.wis + race.wis,
    this.luck = 10,// + job.luck + race.luck,
    this.vit = 10 //+ job.vit + race.vit,

    this.health = 100 + this.vit;
    this.skillpoints = 100;
    // this.race = race;
    // this.job = job;
  }

  // attack(target){
  //   console.log("attacked");
  // }

  dodge(){

    let roll = Math.random()*20;
    if (roll < this.dex ) {
      return true;
    }else{
      return false;
    }
  }
}
