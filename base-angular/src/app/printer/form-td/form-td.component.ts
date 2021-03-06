import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Printers, Dptos } from '../../modelos/data';
import { PrinterIf, DptoIf } from '../../modelos/master';
import { OrderprintIf } from '../../modelos/orderprint';


@Component({
  selector: 'bbl-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css'],
})

export class FormTdComponent implements OnInit {

  aPrinters: Array<PrinterIf>;
  aDptos: Array<DptoIf>;
  orderPrint: OrderprintIf;

@ViewChild('formPrinter') formulario: any;

  constructor() { }

  ngOnInit() {
    this.aPrinters = Printers;
    this.aDptos = Dptos;
    this.orderPrint = {
      user: {
        nombre: '',
        apellidos: '',
        telefono: ''
      },
      printer: {id: '', name: ''},
      isColor: false,
      isClaro: false,
      dpto: { id: '', name: ''}


    };
  }

  enviar() {
    console.log('Datos Enviados');
  }

  borrar() {
   this.formulario.reset();
  }

}
