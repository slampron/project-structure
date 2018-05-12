import { Injectable } from '@angular/core';
import { AttackType } from '../enums/attack.enum';
import { PlayerModel } from '../models/player.model';
import { WeaponModel } from '../models/weapon.model';

export interface IAttackFactory {
  performAttack();
  meleeAttack();
}

@Injectable()
export class AttackFactory implements IAttackFactory {
  constructor(private player: PlayerModel, private weapon: WeaponModel) {}

  public performAttack() {
    switch (this.weapon.type) {
      case AttackType.melee:
        console.log(AttackType.melee, this.meleeAttack());
        break;
      case AttackType.range:
        console.log(AttackType.range);
        break;
      case AttackType.spell:
        console.log(AttackType.spell);
        break;
      default:
        console.log('Other Attack Type');
        break;
    }
  }
  public meleeAttack(): number {
    const damage = this.weapon.damage;

    return damage;
  }
  /*
  does defender have hp left?
  do an initial attack roll with 1d20
  20 is a critical hit
  1 is a miss

  */
}
