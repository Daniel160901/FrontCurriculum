import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { QueriesService } from 'src/app/services/queries.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private router: Router, private user: LoginService, private httpClient: HttpClient, private Queries: QueriesService) { }

  async ngOnInit() {
  }

  

  async login(form: any){
    await this.user.login(form).then((data: any) => {
      if(data.ok){
        this.router.navigate(['/admin'])
        } else{
        alert('Los datos no son correctos');
        }
      });
    }

    return(){
      this.router.navigate(['']);
    }

    async createUser(form: any){    
      try {
        
          const res = this.Queries.createUser(form).then((queryP: any) => {
            if(queryP.ok){
              console.log(queryP.data);
              alert('Usuario registrado con exito: ' + form.username + '. Inicie sesión.');
            }else{
              console.log('Hubo un problema creando escuela');
            }
          });

      } catch (error) {
        console.log(error);
      }
    }

}
