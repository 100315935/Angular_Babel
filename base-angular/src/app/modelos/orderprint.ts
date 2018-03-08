import {DptoIf, PrinterIf, UserIf} from './master';

export interface OrderprintIf {

  user: UserIf;
  printer: PrinterIf;
  isColor: boolean;
  isClaro: boolean;
  dpto: DptoIf;
}



