import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QueriesService } from 'src/app/services/queries.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.css']
})
export class ContactameComponent implements OnInit {
  url: string;
  idPersona: any= 1;
  contactos: any;

  constructor(private httpClient: HttpClient, private Queries: QueriesService, private router : Router) {
    this.url = environment.API_URL;
   }

  ngOnInit(): void {
    this.getContactame(this.idPersona);
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

}
