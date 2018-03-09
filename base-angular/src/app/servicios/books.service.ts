import { Injectable } from '@angular/core';
import { timeout } from 'q';

@Injectable()
export class BooksService {
  aLibros: Array<string>;

  constructor() {
    this.aLibros = [
      'AngularAvanzado',
      'AprendiendoAngular',
      'VivaAngular',
      'AngularMolaMuchisimo'
    ];
   }

   getLibros(clave: string) {
      return this.aLibros;
   }

   getLibrosAsync(clave: string) {
     return new Promise( (resolve, reject) => {
      setTimeout(() => {resolve(this.aLibros); }, 4000 );

     });
   }

}
