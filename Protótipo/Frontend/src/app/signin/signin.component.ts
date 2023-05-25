import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { json } from 'express';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email: string = '';
  password: string = '';

  isLogin: boolean = true;
  erroMessage: string = '';

  constructor(private http: HttpClient) {}

  login() {
    console.log(this.email);
    console.log(this.password);

    let bodyData = {
      email: this.email,
      senha: this.password,
    };

    this.http.post("http://localhost:8086/Usuario/Signin", bodyData).subscribe((resultData: any) => {
      if (resultData.status) {
        alert("Logged in");
        localStorage.setItem("_id", JSON.parse(resultData)._id);
      } else {

        alert("Incorrect Email or Password");
        console.log("Error login");
      }
    });
  }
}
