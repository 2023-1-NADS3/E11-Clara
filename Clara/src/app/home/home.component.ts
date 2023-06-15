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

   getDayOfWeekAbbr(dateString: string): string {
    const dateParts: string[] = dateString.split('/'); 
    const day: number = parseInt(dateParts[0], 10); 
    const month: number = parseInt(dateParts[1], 10);
    const year: number = parseInt(dateParts[2], 10);
  
    const date: Date = new Date(year, month - 1, day); 
    const options: Intl.DateTimeFormatOptions = { weekday: 'short' };
    const dayOfWeekAbbr: string = date.toLocaleDateString('pt-BR', options);
  
    return dayOfWeekAbbr;
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    this.toggleImage = !this.toggleImage;
  }

  ngOnInit(): void {
    this.http.get("http://localhost:8086/Usuario/get" + "/" + localStorage.getItem("_id")).subscribe((resultData: any) => {
      this.Usuario = resultData;

      if (resultData && resultData.name) {
        const names = resultData.name.split(' ');
        const firstName = names[0];
        this.Name = "Olá, " + (firstName.length > 10 ? firstName.slice(0, 10) + "..." : firstName);
      }  
      const selectedOption = this.selectedOption
      const aferation = resultData.aferation[0][selectedOption]
      var rest = 10;

      for (let i = aferation.length - 1; i >= 0; i--) {
      setTimeout(() => {
      }, 1000);
      const liClass = i % 2 !== 0 ? "liBlueLight" : "liBlueDark";
      const SelectAferition = aferation[i];
      rest = rest - 1
      const result = SelectAferition === aferation[i];
      const liElement = document.createElement("li");
      liElement.classList.add(liClass);

      if (liClass === "liBlueLight") {
        liElement.style.display = "flex";
        liElement.style.justifyContent = "center";
        liElement.style.alignItems = "center";
        liElement.style.borderTop = "1px solid #9C9C9C";
        liElement.style.height = "18px";
        liElement.style.background = "#BAE5F3";
        liElement.style.textAlign= "center"
        liElement.style.padding = "0 0 0 20px";
      } else if (liClass === "liBlueDark") {
        liElement.style.display = "flex";
        liElement.style.textAlign= "center"
        liElement.style.justifyContent = "center";
        liElement.style.alignItems = "center";
        liElement.style.borderTop = "1px solid #9C9C9C";
        liElement.style.height = "18px";
        liElement.style.background = "#8DD5EA";
        liElement.style.padding = "0 0 0 20px";
      }

      if (result) {
        const i1Element = document.createElement("i");
        const dayOfWeek: string = SelectAferition && SelectAferition.day ? this.getDayOfWeekAbbr(SelectAferition.day) : "N/A";
        i1Element.textContent = dayOfWeek;
        i1Element.style.display = "inline-block";
        i1Element.style.width = "10%";

        const i2Element = document.createElement("i");
        i2Element.textContent = SelectAferition && SelectAferition.day ? SelectAferition.day : "N/A";
        i2Element.style.display = "inline-block";
        i2Element.style.width = "40%";

        const i3Element = document.createElement("i");
        i3Element.textContent = SelectAferition && SelectAferition.time ? SelectAferition.time : "N/A";
        i3Element.style.display = "inline-block";
        i3Element.style.width = "25%";

        const i4Element = document.createElement("i");
       i4Element.textContent = SelectAferition && SelectAferition.valor + SelectAferition.unid ? SelectAferition.valor + SelectAferition.unid : "N/A";
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
      } else {
        const i4Element = document.createElement("i");
        i4Element.textContent = "";
        i4Element.style.display = "inline-block";
        i4Element.style.width = "25%";
        liElement.appendChild(i4Element);

        const ulElement = document.querySelector(".ulForms");
        if (ulElement) {
          ulElement.appendChild(liElement);
        }
      }
    }
    for (let i = 0; i < rest; i++) {
      const liClass = i % 2 === 0 ? "liBlueLight" : "liBlueDark";
      const liElement = document.createElement("li");
      liElement.classList.add(liClass);
      if (liClass === "liBlueLight") {
        liElement.style.display = "flex";
        liElement.style.justifyContent = "center";
        liElement.style.alignItems = "center";
        liElement.style.borderTop = "1px solid #9C9C9C";
        liElement.style.height = "18px";
        liElement.style.background = "#BAE5F3";
        liElement.style.textAlign= "center"
        liElement.style.padding = "0 0 0 20px";
      } else if (liClass === "liBlueDark") {
        liElement.style.display = "flex";
        liElement.style.textAlign= "center"
        liElement.style.justifyContent = "center";
        liElement.style.alignItems = "center";
        liElement.style.borderTop = "1px solid #9C9C9C";
        liElement.style.height = "18px";
        liElement.style.background = "#8DD5EA";
        liElement.style.padding = "0 0 0 20px";
      }
        const i1Element = document.createElement("i");
        const dayOfWeek: string = "N/A";
        i1Element.textContent = dayOfWeek;
        i1Element.style.display = "inline-block";
        i1Element.style.width = "10%";

        const i2Element = document.createElement("i");
        i2Element.textContent = "N/A";
        i2Element.style.display = "inline-block";
        i2Element.style.width = "40%";

        const i3Element = document.createElement("i");
        i3Element.textContent = "N/A";
        i3Element.style.display = "inline-block";
        i3Element.style.width = "25%";

        const i4Element = document.createElement("i");
       i4Element.textContent = "N/A";
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
        
      }
    });
  }


  schedule() {
      const BackgroundElement = document.getElementById('background') as HTMLElement;
      BackgroundElement.style.opacity = '0';
    setTimeout(() => {
      this.router.navigate(['/schedule']);
    }, 600);
   
  }
  afericoes() {
    const BackgroundElement = document.getElementById('background') as HTMLElement;
    BackgroundElement.style.opacity = '0';
  setTimeout(() => {
    this.router.navigate(['/aferition']);
  }, 600);
 
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
    const selectedOption = this.selectedOption
    const aferation = this.Usuario.aferation[0][selectedOption]
    var rest = 10;
  
    const ulElement = document.querySelector(".ulForms");
    if (ulElement) {
      ulElement.innerHTML = "";
    }
    for (let i = aferation.length - 1; i >= 0; i--) {
      setTimeout(() => {
      }, 1000);
      const liClass = i % 2 !== 0 ? "liBlueLight" : "liBlueDark";
      const SelectAferition = aferation[i];
      rest = rest - 1
      const result = SelectAferition === aferation[i];
      const liElement = document.createElement("li");
      liElement.classList.add(liClass);

      if (liClass === "liBlueLight") {
        liElement.style.display = "flex";
        liElement.style.justifyContent = "center";
        liElement.style.alignItems = "center";
        liElement.style.borderTop = "1px solid #9C9C9C";
        liElement.style.height = "18px";
        liElement.style.background = "#BAE5F3";
        liElement.style.textAlign= "center"
        liElement.style.padding = "0 0 0 20px";
      } else if (liClass === "liBlueDark") {
        liElement.style.display = "flex";
        liElement.style.textAlign= "center"
        liElement.style.justifyContent = "center";
        liElement.style.alignItems = "center";
        liElement.style.borderTop = "1px solid #9C9C9C";
        liElement.style.height = "18px";
        liElement.style.background = "#8DD5EA";
        liElement.style.padding = "0 0 0 20px";
      }

      if (result) {
        const i1Element = document.createElement("i");
        const dayOfWeek: string = SelectAferition && SelectAferition.day ? this.getDayOfWeekAbbr(SelectAferition.day) : "N/A";
        i1Element.textContent = dayOfWeek;
        i1Element.style.display = "inline-block";
        i1Element.style.width = "10%";

        const i2Element = document.createElement("i");
        i2Element.textContent = SelectAferition && SelectAferition.day ? SelectAferition.day : "N/A";
        i2Element.style.display = "inline-block";
        i2Element.style.width = "40%";

        const i3Element = document.createElement("i");
        i3Element.textContent = SelectAferition && SelectAferition.time ? SelectAferition.time : "N/A";
        i3Element.style.display = "inline-block";
        i3Element.style.width = "25%";

        const i4Element = document.createElement("i");
       i4Element.textContent = SelectAferition && SelectAferition.valor + SelectAferition.unid ? SelectAferition.valor + SelectAferition.unid : "N/A";
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
      } else {
        const i4Element = document.createElement("i");
        i4Element.textContent = "";
        i4Element.style.display = "inline-block";
        i4Element.style.width = "25%";
        liElement.appendChild(i4Element);

        const ulElement = document.querySelector(".ulForms");
        if (ulElement) {
          ulElement.appendChild(liElement);
        }
      }
    }
    for (let i = 0; i < rest; i++) {
      const liClass = i % 2 === 0 ? "liBlueLight" : "liBlueDark";
      const liElement = document.createElement("li");
      liElement.classList.add(liClass);
      if (liClass === "liBlueLight") {
        liElement.style.display = "flex";
        liElement.style.justifyContent = "center";
        liElement.style.alignItems = "center";
        liElement.style.borderTop = "1px solid #9C9C9C";
        liElement.style.height = "18px";
        liElement.style.background = "#BAE5F3";
        liElement.style.textAlign= "center"
        liElement.style.padding = "0 0 0 20px";
      } else if (liClass === "liBlueDark") {
        liElement.style.display = "flex";
        liElement.style.textAlign= "center"
        liElement.style.justifyContent = "center";
        liElement.style.alignItems = "center";
        liElement.style.borderTop = "1px solid #9C9C9C";
        liElement.style.height = "18px";
        liElement.style.background = "#8DD5EA";
        liElement.style.padding = "0 0 0 20px";
      }
        const i1Element = document.createElement("i");
        const dayOfWeek: string = "N/A";
        i1Element.textContent = dayOfWeek;
        i1Element.style.display = "inline-block";
        i1Element.style.width = "10%";

        const i2Element = document.createElement("i");
        i2Element.textContent = "N/A";
        i2Element.style.display = "inline-block";
        i2Element.style.width = "40%";

        const i3Element = document.createElement("i");
        i3Element.textContent = "N/A";
        i3Element.style.display = "inline-block";
        i3Element.style.width = "25%";

        const i4Element = document.createElement("i");
       i4Element.textContent = "N/A";
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
    }
  }
 
  isSelectedOption(index: number): boolean {
    return index === this.selectedOptionIndex;
  }

}
