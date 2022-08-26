import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   isLogged: boolean = false;

  constructor(private router : Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cerrarSesion(){
    localStorage.clear();
    alert('Has cerrado sesión');
    this.router.navigate(['/']);
  }

}
