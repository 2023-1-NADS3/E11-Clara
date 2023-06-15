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
  selectedOption: string = 'Glicemia';
  showOptions: boolean = false;
  options: string[] = ['Glicemia', 'Oxigenação', 'Pressão arterial'];
  selectedOptionIndex: number =  0;
  isSelected: boolean = false;
  Name: string = "";
  Usuario: any = [];
  toggleImage: boolean = false;
  isNavbarOpen: boolean = false;
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
    if (this.valor != "" && this.unid != ""){
      let bodyData = {
        sinalAfericao: this.selectedOption,
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
      const BackgroundElement = document.getElementById('cadatroafericoes') as HTMLElement;
      BackgroundElement.style.opacity = '0';
    setTimeout(() => {
      const ball = document.getElementById('ball') as HTMLElement;
      ball.style.width = '1000px';
      ball.style.height = '1000px';
    }, 600);
    setTimeout(() => {
      this.router.navigate(['/aferitionSucess']);
    }, 1350);
    }
    
  }

  toggleOptions(): void {
    this.showOptions = !this.showOptions;
    if(this.showOptions){
      const BackgroundElement = document.getElementById('optionselected') as HTMLElement;
      BackgroundElement.style.height = '140px';
    }else{
      const BackgroundElement = document.getElementById('optionselected') as HTMLElement;
      BackgroundElement.style.height = '50px';
    }
    this.isSelected = !this.isSelected;
  }

  selectOption(option: string, index: number): void {
    this.selectedOption = option;
    this.selectedOptionIndex = index;
  }
  isSelectedOption(index: number): boolean {
    return index === this.selectedOptionIndex;
  }
}
