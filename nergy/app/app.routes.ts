import { Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing';

import { Sprays } from './pages/sprays/sprays';
import { Body } from './pages/body/body';
import { WicksComponent } from './pages/wicks/wicks';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'wicks', component: WicksComponent },
  { path: 'sprays', component: Sprays },
  { path: 'body', component: Body },
  { path: '**', redirectTo: '' },
];
