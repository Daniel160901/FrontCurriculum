import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QueriesService } from 'src/app/services/queries.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  url: string;
  public idPersona: any = 1;
  public texto:any;

  constructor(private httpClient: HttpClient, private Queries: QueriesService, private router : Router) {
    this.url = environment.API_URL;
   }

  ngOnInit(): void {
    this.getPerfil(this.idPersona);
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

}
