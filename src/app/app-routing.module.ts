import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'login'},
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:SignUpComponent},
  { path: 'dashboard', canActivate: [AuthGuard], loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
