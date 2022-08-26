import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QueriesService } from 'src/app/services/queries.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  escuelas: any;
  url: string;
  idPersona: any = 1;

  constructor(private httpClient: HttpClient, private Queries: QueriesService, private router : Router) { 
    this.url = environment.API_URL;
  }

  ngOnInit(): void {
    this.getEscuelas(this.idPersona);
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

}
