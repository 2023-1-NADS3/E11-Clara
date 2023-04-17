import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SingnUpComponent } from './singn-up/singn-up.component';
import { SingnInComponent } from './singn-in/singn-in.component';
import { ForgotmypasswordComponent } from './forgotmypassword/forgotmypassword.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'mainpage', component: MainPageComponent },
  { path: 'singnup', component: SingnUpComponent },
  { path: 'singnin', component: SingnInComponent },
  { path: 'forgotpassword', component: ForgotmypasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
