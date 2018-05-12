import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

import { MatListModule, MatSelectModule } from '@angular/material';

import { ActionFactory } from './factories/action.factory';
import { AttackFactory } from './factories/attack.factory';
import { DiceRollerModel } from './models/dice-roller.model';
import { PlayerModel } from './models/player.model';
import { WeaponModel } from './models/weapon.model';
import { PlayerService } from './services/player.service';
import { WeaponService } from './services/weapon.service';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatListModule,
    RouterModule.forRoot(routes),
  ],
  providers: [PlayerService,
    WeaponService,
    PlayerModel,
    WeaponModel,
    ActionFactory,
    AttackFactory,
    DiceRollerModel],
})
export class AppModule {}
