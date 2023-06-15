import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { VerifyLoginService } from './verify-login.service';
import { VerifyLogedService } from './verify-loged.service';
import { AferationComponent } from './aferation/aferation.component';
import { RegisterAferetionComponent } from './register-aferetion/register-aferetion.component';
import { SucessRegisterAferitionComponent } from './sucess-register-aferition/sucess-register-aferition.component';
import { CheckAferitionComponent } from './check-aferition/check-aferition.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleRegisterComponent } from './schedule-register/schedule-register.component';
import { ScheduleRegisterCheckComponent } from './schedule-register-check/schedule-register-check.component';
import { ScheduleRegisterSucessComponent } from './schedule-register-sucess/schedule-register-sucess.component';

const routes: Routes = [
  { path: 'ScheduleRegister', component: ScheduleRegisterComponent, canActivate: [VerifyLoginService]},
  { path: 'ScheduleRegisterCheck', component: ScheduleRegisterCheckComponent, canActivate: [VerifyLoginService]},
  { path: 'ScheduleRegisterSucess', component: ScheduleRegisterSucessComponent, canActivate: [VerifyLoginService]},
  { path: 'schedule', component: ScheduleComponent, canActivate: [VerifyLoginService]},
  { path: 'aferitionCheck', component: CheckAferitionComponent, canActivate: [VerifyLoginService]},
  { path: 'aferition', component: AferationComponent, canActivate: [VerifyLoginService]},
  { path: 'aferitionSucess', component: SucessRegisterAferitionComponent, canActivate: [VerifyLoginService]},
  { path: 'aferitionRegister', component: RegisterAferetionComponent, canActivate: [VerifyLoginService]},
  { path: 'signin', component: SigninComponent,canActivate: [VerifyLogedService] },
  { path: 'signup', component: SignupComponent,canActivate: [VerifyLogedService] },
  { path: 'home', component: HomeComponent, canActivate: [VerifyLoginService] },
  { path: '', pathMatch: 'full', component: HomeComponent, canActivate: [VerifyLoginService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
