import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sucess-register-aferition',
  templateUrl: './sucess-register-aferition.component.html',
  styleUrls: ['./sucess-register-aferition.component.css']
})
export class SucessRegisterAferitionComponent {
  constructor(private router: Router, private http: HttpClient) { }
  ver(){
    const BackgroundElement = document.getElementById('main') as HTMLElement;
    BackgroundElement.style.opacity = '0';
  setTimeout(() => {
    this.router.navigate(['/']);
  }, 600);
  }
  main(){
    const BackgroundElement = document.getElementById('second') as HTMLElement;
    BackgroundElement.style.opacity = '0';
  setTimeout(() => {
    this.router.navigate(['/']);
  }, 600);
  }
  cadastrar(){
    const BackgroundElement = document.getElementById('main') as HTMLElement;
    BackgroundElement.style.opacity = '0';
  setTimeout(() => {
    this.router.navigate(['/aferitionRegister']);
  }, 600);
  }
}
