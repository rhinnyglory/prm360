import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password.component';


const routes: Routes = [
  { path: '', component: ForgotPasswordComponent }
];

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ForgotPasswordModule { }
