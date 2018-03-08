import {PrinterIf, DptoIf} from './master';



export const Printers: Array<PrinterIf> = [
  {id: '1', name: 'HP'},
  new PrinterIf('2', 'Lexmar'),
  new PrinterIf('3', 'Battle'),
];

export const Dptos: Array<DptoIf> = [
  {id: '', name: 'RRHH'},
  {id: '', name: 'Ventas'},
  {id: '', name: 'Marketing'},
  {id: '', name: 'Sistemas'}
];

