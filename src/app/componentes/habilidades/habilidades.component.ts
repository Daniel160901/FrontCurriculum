import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QueriesService } from 'src/app/services/queries.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  url: string;
  idPersona: any = 1;
  habilidades: any;
  tipoHabilidades: any;


  constructor(private httpClient: HttpClient, private Queries: QueriesService, private router : Router) {
    this.url = environment.API_URL;
   }

  ngOnInit(): void {
    this.getHabilidades();
    this.getHabs();
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

}
