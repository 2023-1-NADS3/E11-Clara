import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  emailParaCodigo: string = '';
  name: string = '';
  date: string = '';
  email: string = '';
  senha: string = '';
  confirmSenha: string = '';
  codigoVerificacao: string = '';
  registrationSent: boolean = false;
  codigoInvalido: boolean = false;
  showBallLarge: boolean = false;

  constructor(private http: HttpClient) { }

  private gerarCodigo(): string {
    const min = 100000;
    const max = 999999;
    const codigo = Math.floor(Math.random() * (max - min + 1)) + min;
    return codigo.toString();
  }

  cadastrar() {
    if (this.registrationSent || this.senha !== this.confirmSenha) {
      return;
    }

    const codigo = this.gerarCodigo();
    const bodyData = {
      "name": this.name,
      "date": this.date,
      "email": this.email,
      "senha": this.senha,
      "code": codigo,
    };

    this.http.post("http://localhost:8086/Usuario/Signup", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {
      const resultObj = JSON.parse(resultData);
      const message = resultObj.message;

      if (message === "Usuario não verificado criado") {
        this.emailParaCodigo = this.email;

        this.name = '';
        this.date = '';
        this.email = '';
        this.senha = '';
        this.confirmSenha = '';

        this.codigoVerificacao = '';

        const element = document.getElementById('confirmarCodigo');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  }

  verificarCodigo() {
    const bodyData = {
      "email": this.emailParaCodigo,
      "verify": this.codigoVerificacao,
    };

    this.http.post("http://localhost:8086/Usuario/Verify", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {

      const resultObj = JSON.parse(resultData);
      const message = resultObj.message;

      if (message === "Verificação realizada com sucesso") {
        const element = document.getElementById('verificarSucesso');
        this.showBallLarge = true;
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        setTimeout(() => {
          const element = document.getElementById('salvarImagem');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 4000);
      }
    });
  }

  voltar() {
    const element = document.getElementById('cadastrar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  finalizarCadastro() {
    const element = document.getElementById('cadastrarRealizado');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
