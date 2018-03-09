import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-libros',
  template: `
  <div class="container">
    <div class="row">
        <bbl-libros-mock class="col-4"></bbl-libros-mock>
        <bbl-libros-buscar class="col-4"></bbl-libros-buscar>
        <bbl-libros-by-service class="col-4"></bbl-libros-by-service>
    </div>
  </div>
  `,
  styles: []
})
export class LibrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
