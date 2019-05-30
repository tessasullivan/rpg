export class Entity {

  constructor(name){
    this.name = name;
    
    this.str = 10,
    this.dex = 10,
    this.intel = 10,
    this.wis = 10,
    this.luck = 10,
    this.vit = 10 

    this.health = 100 + this.vit;
    this.skillpoints = 100;
  }

  attack(target){
    
    let roll = Math.random()*20;
    console.log("attacked");
  }

  dodge(){

    let roll = Math.random()*20;
    if (roll < this.dex ) {
      return true;
    }else{
      return false;
    }
  }
}
