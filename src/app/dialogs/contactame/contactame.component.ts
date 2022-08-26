import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QueriesService } from 'src/app/services/queries.service';

@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.css']
})
export class ContactameComponent implements OnInit {

  constructor(private httpClient: HttpClient, private Queries: QueriesService) { }

  ngOnInit(): void {
  }

  async createContact(idPersona: Number, tipo:any, info: any, foto: any){    
    try {
      const data = {
        persona: idPersona,
        tipo: tipo,
        info: info,
        foto: foto
      }
      const res = this.Queries.createContacto(data).then((queryP: any) => {
        if(queryP.ok){
          console.log(queryP.data);
          this.refresh();
        }else{
          console.log('Hubo un problema creando el contacto');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  refresh(): void { window.location.reload(); }
}
