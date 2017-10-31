import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule'},
  { path: 'users', loadChildren: './users/users.module#UserModule'},
];
  