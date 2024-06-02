import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule, IonicModule]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.router.navigate(['/home'], { state: { data: this.loginForm.value } });
    }
  }
}
