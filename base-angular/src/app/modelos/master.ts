export class Printer {
  constructor(public id: string, public name: string) {}
}

export class PrinterIf {
  constructor(public id: string, public name: string) {}
}

export interface DptoIf {
  id: string;
  name: string;
}

export interface UserIf {
  nombre: string;
  apellidos: string;
  telefono: string;
}
