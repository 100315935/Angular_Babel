import { Component, OnInit } from '@angular/core';
import { GbooksService } from '../../servicios/gbooks.service';

@Component({
  selector: 'bbl-libros-by-service',
  templateUrl: './libros-by-service.component.html',
  styleUrls: ['./libros-by-service.component.css']
})
export class LibrosByServiceComponent implements OnInit {

  aLibros: Array<string>;
  clave: string;
  urlBase: string;

  constructor(public gBook: GbooksService) {
   }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
    this.gBook.getLibros(this.clave).then((response) => this.aLibros = response);
    this.clave = '';
  }

}
