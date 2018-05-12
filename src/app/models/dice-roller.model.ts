import { Injectable } from '@angular/core';

export interface IDiceRollerModel {
  dice: string;
  roll(dice: string);
}

// accepts: 2d20, 1d12..
@Injectable()
export class DiceRollerModel implements IDiceRollerModel {
  public dice: string;

  public roll(dice: string): number {
    let result = 0;
    let x = 0;
    const roll = Number(dice[0]);

    let die = Number(dice[2]) === 1 ? 10 : Number(dice[2]);
    die = Number(dice[2]) === 2 ? 20 : Number(dice[2]);

    for (let i = 0; i < Number(roll); i++) {
      x = Math.floor(Math.random() * die) + 1;
      result += x;
    }
    return result;
  }
}
