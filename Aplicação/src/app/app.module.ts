import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SingnUpComponent } from './singn-up/singn-up.component';
import { SingnInComponent } from './singn-in/singn-in.component';
import { ForgotmypasswordComponent } from './forgotmypassword/forgotmypassword.component';
import { HealthRegisterComponent } from './health-register/health-register.component';
import { MedicationsRegisterComponent } from './medications-register/medications-register.component';
import { MeasurementsRegisterComponent } from './measurements-register/measurements-register.component';
import { ImageRegisterComponent } from './image-register/image-register.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { SucessRegisterComponent } from './sucess-register/sucess-register.component';
import { SucessPasswordComponent } from './sucess-password/sucess-password.component';
import { SucessSingnupComponent } from './sucess-singnup/sucess-singnup.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SingnUpComponent,
    SingnInComponent,
    ForgotmypasswordComponent,
    HealthRegisterComponent,
    MedicationsRegisterComponent,
    MeasurementsRegisterComponent,
    ImageRegisterComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    SucessRegisterComponent,
    SucessPasswordComponent,
    SucessSingnupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
