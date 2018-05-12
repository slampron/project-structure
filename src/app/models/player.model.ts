import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlayerService } from '../services/player.service';

export interface IPlayer {
  playerId?: number;
  name?: string;
  hp?: number;
  playerClass?: string;

  getPlayer();
  updatePlayer();
}

@Injectable()
export class PlayerModel implements IPlayer {
  public player: IPlayer;

  public playerId?: number;
  public name?: string;
  public hp?: number;
  public playerClass?: string;

  constructor(private playerService: PlayerService) {}

  public getPlayer(): any {
    return this.playerService.getPlayer().pipe(map(response => response));
  }

  public updatePlayer() {
    return this.playerService.updatePlayer(this.player);
  }
}
