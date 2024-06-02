import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'convertidor-recetas',
    pathMatch: 'full'
  },
  {
    path: 'convertidor-recetas',
    loadChildren: () => import('./convertidor-recetas/convertidor-recetas.module').then(m => m.ConvertidorRecetasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

