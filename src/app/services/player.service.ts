import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlayer } from '../models/player.model';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IPlayerService {
  getPlayer();
  updatePlayer(request: IPlayer);
}

@Injectable()
export class PlayerService implements IPlayerService {
  private serverUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getPlayer(): any {
    return this.http.get<IPlayer>(`${this.serverUrl}/player`);
  }

  public updatePlayer(request: IPlayer) {
    return this.http
      .put<IPlayer>(`${this.serverUrl}/player`, {
        ...request,
      }).pipe(
        map(res => res),
      );
  }
}
