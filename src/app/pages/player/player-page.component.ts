import { Component, OnDestroy, OnInit } from '@angular/core';

import { DiceRollerModel } from '../../models/dice-roller.model';
import { PlayerModel } from '../../models/player.model';
import { WeaponModel } from '../../models/weapon.model';

import { MatFormFieldControl } from '@angular/material';
import { Observable ,  Subscription } from 'rxjs';
import { ActionType } from '../../enums/action.enum';
import { ActionFactory } from '../../factories/action.factory';

@Component({
  selector: 'app-player-page',
  styleUrls: ['./player-page.component.css'],
  templateUrl: './player-page.component.html',
})
export class PlayerPageComponent implements OnInit, OnDestroy {
  public player: PlayerModel;
  public weapon: WeaponModel;
  public weaponInventory: WeaponModel[] = [];
  public playerSub: Subscription;
  public weaponSub: Subscription;
  public weaponInventorySub: Subscription;
  public loading: boolean;
  public diceRoll: number;

  constructor(
    private playerModel: PlayerModel,
    private weaponModel: WeaponModel,
    private diceRollerModel: DiceRollerModel,
  ) {}

  public ngOnInit(): void {
    this.getPlayer();
    this.getWeapon();
    this.getWeaponInventory();
  }

  public ngOnDestroy(): void {
    this.playerSub.unsubscribe();
    this.weaponSub.unsubscribe();
    this.weaponInventorySub.unsubscribe();
  }

  public rollDice(rolls: string, die: string) {
    const dieRoll = `${rolls}d${die}`;
    this.diceRoll = this.diceRollerModel.roll(dieRoll);
  }

  private getPlayer() {
    this.playerSub = this.playerModel.getPlayer().subscribe(player => (this.player = player));
  }

  private getWeapon() {
    this.weaponSub = this.weaponModel.getWeapon('2').subscribe(weapon => (this.weapon = weapon));
  }

  private getWeaponInventory() {
    this.weaponInventorySub = this.weaponModel
      .getWeapons()
      .subscribe(weapons => (this.weaponInventory = weapons));
  }

  private attack() {
    new ActionFactory(this.player, this.weapon, ActionType.attack).performAction();
  }

  private move() {
    new ActionFactory(this.player, this.weapon, ActionType.move).performAction();
  }
}
