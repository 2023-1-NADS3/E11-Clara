import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { VerifyLoginService } from './verify-login.service';
import { VerifyLogedService } from './verify-loged.service';
import { AferationComponent } from './aferation/aferation.component';
import { RegisterAferetionComponent } from './register-aferetion/register-aferetion.component';

const routes: Routes = [
  { path: 'aferition', component: AferationComponent, canActivate: [VerifyLoginService]},
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
