import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MychartComponent } from './mychart/mychart.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'chart', component:MychartComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),
  },
];
