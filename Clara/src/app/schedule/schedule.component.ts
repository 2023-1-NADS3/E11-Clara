import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  constructor(private router: Router, private http: HttpClient) { }
  cadastrar() {
    const BackgroundElement = document.getElementById('Section') as HTMLElement;
    BackgroundElement.style.opacity = '0';
  setTimeout(() => {
    this.router.navigate(['/ScheduleRegister']);
  }, 600);
  }
  check() {
    const BackgroundElement = document.getElementById('Section') as HTMLElement;
    BackgroundElement.style.opacity = '0';
  setTimeout(() => {
    this.router.navigate(['/ScheduleRegisterCheck']);
  }, 600);
  }
}
