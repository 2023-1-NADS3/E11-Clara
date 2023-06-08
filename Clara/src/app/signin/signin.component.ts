import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  email: string = '';
  password: string = '';

  errorLogin: boolean = false;
  erroMessage: string = '';

  constructor(private router: Router, private http: HttpClient) { }

  mudarParaCadastrp() {
    const logar = document.getElementById('logar') as HTMLElement;
    logar.style.opacity = '0';
    setTimeout(() => {
      const BackgroundElement = document.getElementById('background') as HTMLElement;
      BackgroundElement.style.background = '#4AB3D3';
    }, 500);
    setTimeout(() => {
      this.router.navigate(['/signup']);
    }, 1200);
  }

  login() {
    console.log(this.email);
    console.log(this.password);

    let bodyData = {
      email: this.email,
      senha: this.password,
    };

    this.http.post("http://localhost:8086/Usuario/Signin", bodyData).subscribe(
      (resultData: any) => {
        if (resultData.status) {
          this.errorLogin = false;
          localStorage.setItem("_id", resultData._id);
          const logar = document.getElementById('logar') as HTMLElement;
          logar.style.opacity = '0';
          setTimeout(() => {
            const BackgroundElement = document.getElementById('background') as HTMLElement;
            BackgroundElement.style.background = '#4AB3D3';
          }, 500);
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1200);
        } else {
          this.errorLogin = true;
        }
      },
      (error) => {
        console.log("Error:", error);
      }
    );
  }

}