import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {
  username: string = '';
  fullName: string = '';
  selectedDate: Date = new Date();
  password: string = '';
  confirmPassword: string = '';

  constructor() { }

  enviar() {
    if (this.password === this.confirmPassword) {
      console.log('Formulario enviado');
      // Aquí puedes agregar la lógica para manejar el formulario
    } else {
      console.error('Las contraseñas no coinciden');
    }
  }
}


