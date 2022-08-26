import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../guards/auth-guard.guard';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
      children: [
        {path: '', component: HomeComponent},
        { path: 'login', component: LoginComponent},
        {path: 'admin', component: AdminComponent, canActivate: [AuthGuardGuard]}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class PagesRoutingModule { }
