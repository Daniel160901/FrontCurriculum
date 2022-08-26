import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QueriesService } from 'src/app/services/queries.service';

@Component({
  selector: 'app-habi',
  templateUrl: './habi.component.html',
  styleUrls: ['./habi.component.css']
})
export class HabiComponent implements OnInit {

  constructor(private httpClient: HttpClient, private Queries: QueriesService) { }

  ngOnInit(): void {
  }

  async createHab(idPersona: Number, nombre: any, porcentaje: any, idHab: any){    
    try {
      const dataP = {
        persona: idPersona,
        nombreTipo: nombre,
        porcentaje: porcentaje,
        habilidad: idHab
      }
      const res = this.Queries.createHab(dataP).then((query: any) => {
        if(query.ok){
          console.log(query.data);
          this.refresh();
        }else{
          console.log('Hubo un problema obteniendo textos');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  refresh(): void { window.location.reload(); }

}
