import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IWeapon, WeaponModel } from '../models/weapon.model';

export interface IWeaponService {
  getWeapon(weaponId: string);
  getWeapons();
  updateWeapon(request: IWeapon);
}

@Injectable()
export class WeaponService {
  private serverUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getWeapon(weaponId: string) {
    return this.http
      .get<WeaponModel[]>(`${this.serverUrl}/weapon/${weaponId}`)
      .pipe(map(res => res[0]));
  }

  public getWeapons() {
    return this.http.get<WeaponModel[]>(`${this.serverUrl}/weapons`).pipe(map(res => res));
  }

  public updateWeapon(request: IWeapon) {
    return this.http
      .put<IWeapon>(`${this.serverUrl}/weapon`, {
        ...request,
      })
      .pipe(map(res => res));
  }
}
