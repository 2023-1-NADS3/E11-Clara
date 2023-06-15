import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-schedule-register',
  templateUrl: './schedule-register.component.html',
  styleUrls: ['./schedule-register.component.css']
})
export class ScheduleRegisterComponent {
  constructor(private router: Router, private http: HttpClient) { }
  name: string = "";
  con: string = "";
  unidcon: string = "";
  dos: string = "";
  dias: string = "";
  hor: string = "";
  dur: string = "";
  durcon: string = "";
  obs: string = "";
  cancelar(){
    const BackgroundElement = document.getElementById('cadatroafericoes') as HTMLElement;
    BackgroundElement.style.opacity = '0';
  setTimeout(() => {
    const ball = document.getElementById('ball') as HTMLElement;
    ball.style.width = '1000px';
    ball.style.height = '1000px';
  }, 600);
  setTimeout(() => {
    this.router.navigate(['/']);
  }, 1350);
  }
  cadastrar(){
    if (this.name != "" && this.con != "" && this.unidcon != "" && this.dos != "" && this.dias != "" && this.hor != "" && this.dur != "" && this.durcon != "" && this.obs != "") {
      let bodyData = {
        name: this.name,
        con: this.con,
        unidcon: this.unidcon,
        dos: this.dos,
        dias: this.dias,
        hor: this.hor,
        dur: this.dur,
        durcon: this.durcon,
        obs: this.obs,
      };
      console.log(bodyData)
      this.http
      .post("http://localhost:8086/Usuario/SchedulePost" + "/" + localStorage.getItem("_id"), bodyData)
      .subscribe(
        (resultData: any) => {
          // Lógica de manipulação da resposta aqui
          console.log("Resposta:", resultData);
          // Outras ações após receber a resposta
        },
        (error) => {
          // Tratamento de erro
          console.error("Erro:", error);
        }
        
      );
      const BackgroundElement = document.getElementById('cadatroafericoes') as HTMLElement;
      BackgroundElement.style.opacity = '0';
    setTimeout(() => {
      const ball = document.getElementById('ball') as HTMLElement;
      ball.style.width = '1000px';
      ball.style.height = '1000px';
    }, 600);
    setTimeout(() => {
      this.router.navigate(['/ScheduleRegisterSucess']);
    }, 1350);
    
    }
  }
}
