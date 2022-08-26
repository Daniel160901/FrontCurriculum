import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QueriesService } from 'src/app/services/queries.service';

@Component({
  selector: 'app-upd-edu',
  templateUrl: './upd-edu.component.html',
  styleUrls: ['./upd-edu.component.css']
})
export class UpdEduComponent implements OnInit {

  constructor(private httpClient: HttpClient, private Queries: QueriesService, @Inject(MAT_DIALOG_DATA) public data: {idEscuela: any, nombreEscuela: any, tipo: any, generacion: any, comentario: any}) { }

  ngOnInit(): void {
  }

  async updateEscuela(idEscuela: any, nombreEscuela: any, generacion: any, tipo: any, comentario: any){    
    try {
      const data = {
        idEscuela: idEscuela,
        nombreEscuela: nombreEscuela,
        generacion: generacion,
        tipo: tipo,
        comentario: comentario
      }
      const resP = this.Queries.updateEdu(data).then((query: any) => {
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
