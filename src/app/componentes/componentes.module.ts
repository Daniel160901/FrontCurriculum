import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ContactameComponent } from './contactame/contactame.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [

    HeaderComponent,
    PrincipalComponent,
    PerfilComponent,
    EducacionComponent,
    HabilidadesComponent,
    ContactameComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    HeaderComponent,
    PrincipalComponent,
    PerfilComponent,
    EducacionComponent,
    HabilidadesComponent,
    ContactameComponent,
    FooterComponent
  ]

})
export class ComponentesModule { }
