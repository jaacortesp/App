import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { ConvertidorRecetasPage } from './convertidor-recetas.page';

const routes: Routes = [
  {
    path: '',
    component: ConvertidorRecetasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConvertidorRecetasPage]
})
export class ConvertidorRecetasPageModule {}

