import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QueriesService } from 'src/app/services/queries.service';

@Component({
  selector: 'app-upd-texto',
  templateUrl: './upd-texto.component.html',
  styleUrls: ['./upd-texto.component.css']
})
export class UpdTextoComponent implements OnInit {
  
  constructor(private httpClient: HttpClient, private Queries: QueriesService, @Inject(MAT_DIALOG_DATA) public data: {idTexto: any, texto: any}) {
    //this.getTextos(this.data);
   }

  ngOnInit(): void {
  }

  async updateTexto(idTexto: any, texto: any){    
    try{
      const data = {
        idTexto: idTexto,
        texto: texto
      }
      const res = this.Queries.updateTexto(data).then((query: any) =>{
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

  refresh(): void { window.location.reload(); }
}
