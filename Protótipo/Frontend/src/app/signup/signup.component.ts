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
  showRegistration: boolean = true;
  showVerification: boolean = false;
  registrationSent: boolean = false;
  showSuccess: boolean = false;
  showUpload: boolean = false;
  showSuccessMessage: boolean = false;

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

        this.showRegistration = false;
        this.showVerification = true;
        this.registrationSent = true;

        this.name = '';
        this.date = '';
        this.email = '';
        this.senha = '';
        this.confirmSenha = '';

        this.codigoVerificacao = '';
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
        this.showVerification = false;
        this.showSuccess = true;
        setTimeout(() => {
          this.showSuccess = false;
          this.showUpload = true;
        }, 2000);
      } else {
        const errorMessage = "X verificação: " + message;
        // Exibir a mensagem de erro na tela
      }
    });
  }

  voltar() {
    this.showRegistration = true;
    this.showVerification = false;
    this.registrationSent = false;
  }

  finalizarCadastro() {
    // Lógica para finalizar o cadastro e exibir a tela de sucesso
    this.showUpload = false;
    this.showSuccessMessage = true;
  }
}
