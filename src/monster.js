import { Entity } from './Entity';

export class Skeleton extends Entity {
  constructor() {
    super("skeleton");

    this.str += -5;
    this.dex += -4;
    this.luck += -8;
    this.vit += 1;

    this.health = 20;
  }
}
export class Ogre extends Entity {
  constructor() {
    super("ogre");

    this.str += 15;
    this.dex += -4;
    this.luck += -2;
    this.vit += 1;

    this.health = 50;
  }
}
export class Goblin extends Entity {
  constructor() {
    super("goblin");

    this.str += -3;
    this.dex += 4;
    this.luck += 5;
    this.vit += 1;

    this.health = 20;
  }
}
