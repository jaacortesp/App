import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class LoginPage implements OnInit {
  usuario: string = "";
  password: string = "";

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() { }

  login() {
    if (this.usuario.trim() == 'javiera' && this.password.trim() == '1234') {
      let navigationExtras: NavigationExtras = {
        state: {
          usuarioEnviado: this.usuario,
          passwordEnviado: this.password
        }
      };
      this.router.navigate(['/home'], navigationExtras);
    } else {
      this.presentAlert('Usuario o contraseña incorrectos');
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}

