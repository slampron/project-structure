import { Injectable } from '@angular/core';
import { ActionType } from '../enums/action.enum';
import { AttackType } from '../enums/attack.enum';
import { PlayerModel } from '../models/player.model';
import { WeaponModel } from '../models/weapon.model';
import { AttackFactory } from './attack.factory';

export interface IActionFactory {
  performAction();
}

@Injectable()
export class ActionFactory implements IActionFactory {
  constructor(
    private player: PlayerModel,
    private weapon: WeaponModel,
    private actionType: ActionType,
  ) {}

  public performAction() {
    switch (this.actionType) {
      case ActionType.attack:
        this.attack();
        break;
      case ActionType.move:
        this.move();
        break;
      case ActionType.defend:
        this.defend();
        break;
      default:
        break;
    }
  }

  private attack(): any {
    const attack = new AttackFactory(this.player, this.weapon).performAttack();
  }

  private move() {
    return 'Move';
  }

  private defend() {
    return 'Defend';
  }
}
