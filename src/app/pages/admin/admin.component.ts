import {Component, OnInit, Query} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { QueriesService } from 'src/app/services/queries.service';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TextosComponent } from 'src/app/dialogs/textos/textos.component';
import { EducacionComponent } from 'src/app/dialogs/educacion/educacion.component';
import { ContactameComponent } from 'src/app/dialogs/contactame/contactame.component';
import { HabiComponent } from 'src/app/dialogs/habi/habi.component';
import { UpdTextoComponent } from 'src/app/dialogs/upd-texto/upd-texto.component';
import { UpdEduComponent } from 'src/app/dialogs/upd-edu/upd-edu.component';

export interface Persona {
  idPersona: Number,
  nombre: string,
  apPat: string,
  apMat: string
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public url: string;
  public personaInterface: Persona | undefined;
  public idPersona: any = 1;
  public perfil: any;
  public texto: any;
  public escuelas: any;
  public habilidades: any;
  public contactos: any;
  public tipoHabilidades: any;


  constructor(private httpClient: HttpClient, private Queries: QueriesService, private router : Router, public dialog: MatDialog) {
    this.url = environment.API_URL;

   }

  ngOnInit(): void {
    this.getPrinci(this.idPersona);
    this.getPerfil(this.idPersona);
    this.getEscuelas(this.idPersona);
    this.getHabs();
    this.getContactame(this.idPersona);
    this.getHabilidades();
  }

  //////Métodos Find////////

  async getPrinci(idPersona: Number){
    try{
      const data = {
        idPersona: idPersona
      }
      const res = this.Queries.getPrincipal(data).then((query: any) => {
        if (query.ok){
          console.log(query.data);
          this.perfil = query.data;
        } else {
          console.log('no hay nada')
        }
      });
    } catch(e){
      console.log('Hubo un problema en adminComp metodo getPrinci');
      
    }
  }

  async getPerfil(idPersona: Number){    
    try {
      const dataP = {
        idPersona: idPersona
      }
      const resP = this.Queries.getPerfil(dataP).then((queryP: any) => {
        if(queryP.ok){
          console.log(queryP.data);
          this.texto=queryP.data;
        }else{
          console.log('Hubo un problema obteniendo textos');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getEscuelas(idPersona: Number){    
    try {
      const dataP = {
        idPersona: idPersona
      }
      const resP = this.Queries.getEducacion(dataP).then((queryP: any) => {
        if(queryP.ok){
          console.log(queryP.data);
          this.escuelas=queryP.data;
        }else{
          console.log('Hubo un problema obteniendo escuelas');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getHabs(){    
    try {
      const resP = this.Queries.getHabilidades().then((queryP: any) => {
        if(queryP.ok){
          console.log(queryP.data);
          this.tipoHabilidades=queryP.data;
        }else{
          console.log('Hubo un problema obteniendo habilidades');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getContactame(idPersona: Number){    
    try {
      const data = {
        idPersona: idPersona
      }
      const resP = this.Queries.getContacto(data).then((query: any) => {
        if(query.ok){
          console.log(query.data);
          this.contactos=query.data;
        }else{
          console.log('Hubo un problema obteniendo escuelas');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getHabilidades(){    
    try {
      const res = this.Queries.getHabs().then((query: any) => {
        if(query.ok){
          console.log(query.data);
          this.habilidades=query.data;
        }else{
          console.log('Hubo un problema obteniendo habilidades');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  //////Métodos Delete////////

  async deleteEscuela(idEscuela: any){
    try{
      const data = {
        idEscuela: idEscuela
      }
      const res = this.Queries.deleteEscuela(data).then((query: any) =>{
        if(query.ok){
          console.log('Escuela a eliminar');
          this.refresh();
        } else{
          console.log('La escuela no se eliminó');
        }
      });
    } catch(e){
      console.log('Hubo un problema eliminando la escuela');
    }
  }

  async deleteTexto(idTexto: any){
    try{
      const data = {
        idTexto: idTexto
      }
      const res = this.Queries.deleteTexto(data).then((query: any) =>{
        if(query.ok){
          console.log('Texto a eliminar');
          this.refresh();
        } else{
          console.log('El texto no se eliminó');
        }
      });
    } catch(e){
      console.log('Hubo un problema eliminando el texto');
    }
  }

  async deleteContact(idContacto: any){
    try{
      const data = {
        idContactame: idContacto
      }
      const res = this.Queries.deleteContacto(data).then((query: any) =>{
        if(query.ok){
          this.refresh();
        } else{
          console.log('El texto no se eliminó');
        }
      });
    } catch(e){
      console.log('Hubo un problema eliminando el texto');
    }
  }

  async deleteHab(idHab: any){
    try{
      const data = {
        idHabs: idHab
      }
      const res = this.Queries.deleteHab(data).then((query: any) =>{
        if(query.ok){
          this.refresh();
        } else{
          console.log('El texto no se eliminó');
        }
      });
    } catch(e){
      console.log('Hubo un problema eliminando el texto');
    }
  }

  ////////////Métodos UPDATE



  ////////////Métodos CREATE



  ////////////Métodos DIALOG
  openDialog(){
    this.dialog.open(TextosComponent);
  }

  openDialogT(idTexto: any, texto: any){
    this.dialog.open(UpdTextoComponent, {data:{
      idTexto: idTexto,
      texto: texto
    }});
  }

  openDialogEdu(){
    this.dialog.open(EducacionComponent);
  }

  openDialogEduU(idEscuela: any, nombreEscuela: any, tipo: any, generacion: any, comentario: any){
    this.dialog.open(UpdEduComponent, { data: {
      idEscuela: idEscuela,
      nombreEscuela: nombreEscuela,
      tipo: tipo,
      generacion: generacion,
      comentario: comentario
    }});
  }

  openDialogCont(){
    this.dialog.open(ContactameComponent);
  }
  
  openDialogHab(){
    this.dialog.open(HabiComponent);
  }

  refresh(): void { window.location.reload(); }
}
