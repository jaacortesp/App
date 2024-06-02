import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'convertidor-recetas',
    loadComponent: () => import('./convertidor-recetas/convertidor-recetas.page').then( m => m.ConvertidorRecetasPage)
  },
  {
    path: 'recetas',
    loadComponent: () => import('./recetas/recetas.page').then( m => m.RecetasPage)
  },
  {
    path: 'sign-in',
    loadComponent: () => import('./sign-in/sign-in.page').then( m => m.SignInPage)
  }
];
