import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-aferetion',
  templateUrl: './register-aferetion.component.html',
  styleUrls: ['./register-aferetion.component.css']
})
export class RegisterAferetionComponent {
  constructor(private router: Router, private http: HttpClient) { }
  sinalAfericao: string = "";
  valor: string = "";
  unid: string = "";
  cadastrar(){
    if (this.sinalAfericao != "" && this.valor != "" && this.unid != ""){
      let bodyData = {
        sinalAfericao: this.sinalAfericao,
        valor: this.valor,
        unid: this.unid,
      };
  
      this.http
      .post("http://localhost:8086/Usuario/AferitionPost" + "/" + localStorage.getItem("_id"), bodyData)
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
    
    }
  }
}
