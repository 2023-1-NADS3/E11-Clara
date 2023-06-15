import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-aferation',
  templateUrl: './aferation.component.html',
  styleUrls: ['./aferation.component.css']
})
export class AferationComponent {
  constructor(private router: Router, private http: HttpClient) { }
  cadastrar() {
    const BackgroundElement = document.getElementById('Section') as HTMLElement;
    BackgroundElement.style.opacity = '0';
  setTimeout(() => {
    this.router.navigate(['/aferitionRegister']);
  }, 600);
  }
  check() {
    const BackgroundElement = document.getElementById('Section') as HTMLElement;
    BackgroundElement.style.opacity = '0';
  setTimeout(() => {
    this.router.navigate(['/aferitionCheck']);
  }, 600);
  }
}
