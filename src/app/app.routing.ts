import { ModuleWithProviders,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'player', pathMatch: 'full' },
  {
    path: 'player',
    // tslint:disable-next-line:object-literal-sort-keys
    loadChildren: 'app/pages/player/player-page.module#PlayerPageModule',
  },
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
