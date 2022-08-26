import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QueriesService } from 'src/app/services/queries.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private httpClient: HttpClient, private Queries: QueriesService) { }

  ngOnInit(): void {
  }

  async createEdu(idPersona: Number, nombreEscuela: any, generacion: any, tipo: any, comentario: any){    
    try {
      const data = {
        persona: idPersona,
        nombreEscuela: nombreEscuela,
        generacion: generacion,
        tipo: tipo,
        comentario: comentario
      }
      const res = this.Queries.createEducacion(data).then((queryP: any) => {
        if(queryP.ok){
          console.log(queryP.data);
          this.refresh();
        }else{
          console.log('Hubo un problema creando escuela');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  refresh(): void { window.location.reload(); }
}
