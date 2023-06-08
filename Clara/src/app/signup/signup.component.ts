import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private http: HttpClient) { }

  get codigoVerificacaoDigits() {
    return this.codigoVerificacao.split('').slice(0, 6);
  }

  onCodeInput(event: any) {
    const input = event.target as HTMLInputElement;
    this.codigoVerificacao = input.value;
  }

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
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          const BackgroundElement = document.getElementById('background') as HTMLElement;
          BackgroundElement.style.background = '#5fcf5d';
        }
        setTimeout(() => {
          const element = document.getElementById('salvarImagem');
          if (element) {
            const BackgroundElement = document.getElementById('background') as HTMLElement;
            BackgroundElement.style.background = '#E5E5E5';
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 2000);
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
    const BackgroundElement = document.getElementById('background') as HTMLElement;
    BackgroundElement.style.background = '#4AB3D3';
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  irParaLogin() {
    const cadastrarRealizado = document.getElementById('cadastrarRealizado') as HTMLElement;
    cadastrarRealizado.style.opacity = '0';
    setTimeout(() => {
      this.router.navigate(['/signin']);
    }, 1000);
  }

  mudarParaLogin() {
    const cadastrar = document.getElementById('cadastrar') as HTMLElement;
    cadastrar.style.opacity = '0';
    setTimeout(() => {
      const BackgroundElement = document.getElementById('background') as HTMLElement;
      BackgroundElement.style.background = '#4AB3D3';
    }, 500);
    setTimeout(() => {
      this.router.navigate(['/signin']);
    }, 1200);
  }

}
