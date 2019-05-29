import { Entity } from './Entity';

export class Wizard extends Entity {

  constructor(name) {

    super(name);

    this.str += -1;
    this.dex += 0;
    this.intel += 3;
    this.wis += 5;
    this.luck += 1;
    this.vit += 1;

    this.skills = {

      fireball : {
        damage : 5,
        cost : 15,
      },
      missle : {
        damage: 8,
        cost: 18,
      }
    }
  }
}

export class Warrior extends Entity {

  constructor(name) {
    
    super(name);
    
    this.str += 5;
    this.dex += 1;
    this.intel += -1;
    this.wis += 0;
    this.luck += 0;
    this.vit += 3;

    this.skills = {

      charge : {
        damage : 10,
        cost : 15
      },
      cleave : {
        damage : 30,
        cost : 20
      }
    }
  }
}