import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-convertidor-recetas',
  templateUrl: './convertidor-recetas.page.html',
  styleUrls: ['./convertidor-recetas.page.scss'],
})
export class ConvertidorRecetasPage {
  recetaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.recetaForm = this.fb.group({
      ingredientes: this.fb.array([this.crearIngrediente()]),
      tiempoHorneado: [''],
      temperaturaHorneado: [''],
      requiereHorneado: [false],
      porcionesOriginal: ['', Validators.required],
      porcionesDeseadas: ['', Validators.required]
    });
  }

  get ingredientes() {
    return this.recetaForm.get('ingredientes') as FormArray;
  }

  crearIngrediente(): FormGroup {
    return this.fb.group({
      nombre: ['', Validators.required],
      cantidad: ['', Validators.required],
      unidad: ['gramos', Validators.required]
    });
  }

  agregarIngrediente() {
    this.ingredientes.push(this.crearIngrediente());
  }

  calcular() {
    // Lógica para calcular proporciones y mostrar el resultado
  }

  guardarReceta() {
    // Lógica para guardar la receta
  }
}
