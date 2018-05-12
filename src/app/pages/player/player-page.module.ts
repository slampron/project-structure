import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { PlayerPageComponent } from './player-page.component';

@NgModule({
  bootstrap: [PlayerPageComponent],
  declarations: [PlayerPageComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        component: PlayerPageComponent,
        path: '',
      },
    ]),
  ],
  providers: [],
})
export class PlayerPageModule {}
