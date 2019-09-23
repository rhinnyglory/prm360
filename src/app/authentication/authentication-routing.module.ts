import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';

const routes: Routes = [{
  path: '', component: AuthenticationComponent
}, {
  path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
}, {
  path: 'forgot-password', loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
