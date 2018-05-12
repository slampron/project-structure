import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { WeaponService } from '../services/weapon.service';

export interface IWeapon {
  weaponId?: number;
  name?: string;
  type?: string;
  damage?: number;

  getWeapon(weaponId: string);
  updateWeapon();
}

@Injectable()
export class WeaponModel implements IWeapon {
  public weapon: IWeapon;

  public weaponId?: number;
  public name?: string;
  public type?: string;
  public damage?: number;

  constructor(private weaponService: WeaponService) {}

  public getWeapon(weaponId: string): any {
    return this.weaponService.getWeapon(weaponId).pipe(map(response => response));
  }

  public getWeapons() {
    return this.weaponService.getWeapons().pipe(map(response => response));
  }

  public updateWeapon() {
    return this.weaponService.updateWeapon(this.weapon);
  }
}
