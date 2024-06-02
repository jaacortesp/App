import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [IonicModule, RouterModule, CommonModule]
})
export class HomeComponent {
  userData: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.userData = navigation?.extras.state?.['data'];
  }
}

