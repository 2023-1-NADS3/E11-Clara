import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-schedule-register-sucess',
  templateUrl: './schedule-register-sucess.component.html',
  styleUrls: ['./schedule-register-sucess.component.css']
})
export class ScheduleRegisterSucessComponent {
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
    this.router.navigate(['/ScheduleRegister']);
  }, 600);
  }
}
