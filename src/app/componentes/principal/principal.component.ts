import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QueriesService } from 'src/app/services/queries.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public perfil: any;
  public url: string;
  public idPersona: any = 1;
  constructor(private httpClient: HttpClient, private Queries: QueriesService, private router : Router) { 
    this.url = environment.API_URL;
  }

  ngOnInit(): void {
    this.getPrinci(this.idPersona);
  }

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
  
}
