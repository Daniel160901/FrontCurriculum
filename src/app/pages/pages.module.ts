import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogsModule } from '../dialogs/dialogs.module';
import { MatDialogModule } from '@angular/material/dialog'


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    RouterModule,
    PagesRoutingModule,
    ComponentesModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    DialogsModule,
    MatDialogModule
  ]
})
export class PagesModule { }
