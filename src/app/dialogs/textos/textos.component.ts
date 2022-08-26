import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QueriesService } from 'src/app/services/queries.service';

@Component({
  selector: 'app-textos',
  templateUrl: './textos.component.html',
  styleUrls: ['./textos.component.css']
})
export class TextosComponent implements OnInit {
  public texto: any;
  constructor(private httpClient: HttpClient, private Queries: QueriesService) { }



  ngOnInit(): void {
  }

  async createTexto(idPersona: Number, text: any){    
    try {
      const dataP = {
        persona: idPersona,
        texto: text
      }
      const resP = this.Queries.createTextos(dataP).then((queryP: any) => {
        if(queryP.ok){
          console.log(queryP.data);
          this.texto=queryP.data;
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
