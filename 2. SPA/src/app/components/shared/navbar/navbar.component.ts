import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor() { }

  buscarHeroe(termino: string) {
    console.log('Búsqueda texto: ');
    console.log(termino);
  }

}
