import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  toggleImage: boolean = false;
  isNavbarOpen: boolean = false;

  constructor(private router: Router) { }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    this.toggleImage = !this.toggleImage;
  }
  
  Deslogar() {
    localStorage.removeItem('_id');
    this.router.navigate(['/signin']);
  }
}
