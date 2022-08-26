import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { TextosComponent } from './textos/textos.component';
import { ContactameComponent } from './contactame/contactame.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabiComponent } from './habi/habi.component';
import { UpdTextoComponent } from './upd-texto/upd-texto.component';
import { UpdEduComponent } from './upd-edu/upd-edu.component';

@NgModule({
  declarations: [TextosComponent, ContactameComponent, EducacionComponent, HabiComponent, UpdTextoComponent, UpdEduComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [MatDialogModule]
})
export class DialogsModule { }
