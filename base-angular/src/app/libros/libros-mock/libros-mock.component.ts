import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../servicios/books.service';

@Component({
  selector: 'bbl-libros-mock',
  templateUrl: './libros-mock.component.html',
  styleUrls: ['./libros-mock.component.css']
})
export class LibrosMockComponent implements OnInit {

  aLibros: Array<string>;
  clave: string;

  constructor(public bookService: BooksService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
    this.aLibros = this.bookService.getLibros(this.clave);
    this.clave = '';
  }

  buscarAsync() {
     this.bookService.getLibrosAsync(this.clave).then((response: any) => this.aLibros = response);
     this.clave = '';
  }

}
