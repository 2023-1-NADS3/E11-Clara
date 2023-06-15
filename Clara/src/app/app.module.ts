import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AferationComponent } from './aferation/aferation.component';
import { RegisterAferetionComponent } from './register-aferetion/register-aferetion.component';
import { SucessRegisterAferitionComponent } from './sucess-register-aferition/sucess-register-aferition.component';
import { CheckAferitionComponent } from './check-aferition/check-aferition.component';
import { ScheduleRegisterComponent } from './schedule-register/schedule-register.component';
import { ScheduleRegisterSucessComponent } from './schedule-register-sucess/schedule-register-sucess.component';
import { ScheduleRegisterCheckComponent } from './schedule-register-check/schedule-register-check.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    MeasurementsComponent,
    ScheduleComponent,
    AferationComponent,
    RegisterAferetionComponent,
    SucessRegisterAferitionComponent,
    CheckAferitionComponent,
    ScheduleRegisterComponent,
    ScheduleRegisterSucessComponent,
    ScheduleRegisterCheckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
