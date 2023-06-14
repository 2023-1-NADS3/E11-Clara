import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  selectedOption: string = localStorage.getItem("selectedOption") || 'Glicemia';
  showOptions: boolean = false;
  options: string[] = ['Glicemia', 'Oxigenação', 'Pressão arterial'];
  selectedOptionIndex: number = !isNaN(Number(localStorage.getItem('SelectedIndex'))) ? Number(localStorage.getItem('SelectedIndex')) : 2;
  isSelected: boolean = false;
  Name: string = "";
  Usuario: any = [];
  toggleImage: boolean = false;
  isNavbarOpen: boolean = false;
  constructor(private router: Router, private http: HttpClient) { }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    this.toggleImage = !this.toggleImage;
  }

  ngOnInit(): void {
    this.http.get("http://localhost:8086/Usuario/get" + "/" + localStorage.getItem("_id")).subscribe((resultData: any) => {
      this.Usuario = resultData;
      console.log(resultData);

      if (resultData && resultData.name) {
        const names = resultData.name.split(' ');
        const firstName = names[0];
        this.Name = "Olá, " + (firstName.length > 10 ? firstName.slice(0, 10) + "..." : firstName);
      }
      for (let i = 1; i < 11; i++) {
        const liClass = i % 2 !== 0 ? "liBlueLight" : "liBlueDark";
        const value = resultData.aferation[i] ? resultData.aferation[i] + " " + this.selectOption : "none";
      
        const liElement = document.createElement("li");
        liElement.classList.add(liClass);

        if (liClass === "liBlueLight") {
          liElement.style.display = "flex";
          liElement.style.justifyContent = "center";
          liElement.style.alignItems = "center";
          liElement.style.borderTop = "1px solid #9C9C9C";
          liElement.style.height = "18px";
          liElement.style.background = "#BAE5F3";
          liElement.style.padding = "0 0 0 20px";
        } else if (liClass === "liBlueDark") {
          liElement.style.display = "flex";
          liElement.style.justifyContent = "center";
          liElement.style.alignItems = "center";
          liElement.style.borderTop = "1px solid #9C9C9C";
          liElement.style.height = "18px";
          liElement.style.background = "#8DD5EA";
          liElement.style.padding = "0 0 0 20px";
        }
      
        if (value != "none") {
          const i1Element = document.createElement("i");
          i1Element.textContent = "Seg.";
          i1Element.style.display = "inline-block";
          i1Element.style.width = "25%";
        
          const i2Element = document.createElement("i");
          i2Element.textContent = "14/04/2023";
          i2Element.style.display = "inline-block";
          i2Element.style.width = "25%";
        
          const i3Element = document.createElement("i");
          i3Element.textContent = "06h07";
          i3Element.style.display = "inline-block";
          i3Element.style.width = "25%";
        
          const i4Element = document.createElement("i");
          i4Element.textContent = "23m/L";
          i4Element.style.display = "inline-block";
          i4Element.style.width = "25%";
        
          liElement.appendChild(i1Element);
          liElement.appendChild(i2Element);
          liElement.appendChild(i3Element);
          liElement.appendChild(i4Element);
        
          const ulElement = document.querySelector(".ulForms");
          if (ulElement) {
            ulElement.appendChild(liElement);
          }
        }else{
          const i4Element = document.createElement("i");
          i4Element.textContent = "None";
          i4Element.style.display = "inline-block";
          i4Element.style.width = "25%";
          liElement.appendChild(i4Element);
          const ulElement = document.querySelector(".ulForms");
          if (ulElement) {
            ulElement.appendChild(liElement);
          }
        }
        }
    });
  }
  

  afericoes(){
    this.router.navigate(['/aferition']);
  }

  Deslogar() {
    localStorage.removeItem("selectedOption")
    localStorage.removeItem("SelectedIndex");
    localStorage.removeItem('_id');
    this.router.navigate(['/signin']);
  }


  toggleOptions(): void {
    this.showOptions = !this.showOptions;
    this.isSelected = !this.isSelected;
  }

  selectOption(option: string, index: number): void {
    this.selectedOption = option;
    this.selectedOptionIndex = index;
    localStorage.setItem("selectedOption", option)
    localStorage.setItem("SelectedIndex", index.toString());
    const ulElement = document.querySelector(".ulForms");
    if (ulElement) {
      ulElement.innerHTML = ""; 
    }
    for (let i = 1; i < 11; i++) {
      const liClass = i % 2 !== 0 ? "liBlueLight" : "liBlueDark";
      const value = this.Usuario.aferation[i] ? this.Usuario.aferation[i] + " " + this.selectOption : "none";
    
      const liElement = document.createElement("li");
      liElement.classList.add(liClass);

      if (liClass === "liBlueLight") {
        liElement.style.display = "flex";
        liElement.style.justifyContent = "center";
        liElement.style.alignItems = "center";
        liElement.style.borderTop = "1px solid #9C9C9C";
        liElement.style.height = "18px";
        liElement.style.background = "#BAE5F3";
        liElement.style.padding = "0 0 0 20px";
      } else if (liClass === "liBlueDark") {
        liElement.style.display = "flex";
        liElement.style.justifyContent = "center";
        liElement.style.alignItems = "center";
        liElement.style.borderTop = "1px solid #9C9C9C";
        liElement.style.height = "18px";
        liElement.style.background = "#8DD5EA";
        liElement.style.padding = "0 0 0 20px";
      }
    
      if (value != "none") {
        const i1Element = document.createElement("i");
        i1Element.textContent = "Seg.";
        i1Element.style.display = "inline-block";
        i1Element.style.width = "25%";
      
        const i2Element = document.createElement("i");
        i2Element.textContent = "14/04/2023";
        i2Element.style.display = "inline-block";
        i2Element.style.width = "25%";
      
        const i3Element = document.createElement("i");
        i3Element.textContent = "06h07";
        i3Element.style.display = "inline-block";
        i3Element.style.width = "25%";
      
        const i4Element = document.createElement("i");
        i4Element.textContent = "23m/L";
        i4Element.style.display = "inline-block";
        i4Element.style.width = "25%";
      
        liElement.appendChild(i1Element);
        liElement.appendChild(i2Element);
        liElement.appendChild(i3Element);
        liElement.appendChild(i4Element);
      
        const ulElement = document.querySelector(".ulForms");
        if (ulElement) {
          ulElement.appendChild(liElement);
        }
      }else{
        const i4Element = document.createElement("i");
        i4Element.textContent = "None";
        i4Element.style.display = "inline-block";
        i4Element.style.width = "25%";
        liElement.appendChild(i4Element);
        const ulElement = document.querySelector(".ulForms");
        if (ulElement) {
          ulElement.appendChild(liElement);
        }
      }
      }
  }

  isSelectedOption(index: number): boolean {
    return index === this.selectedOptionIndex;
  }

}
