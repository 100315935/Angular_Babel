import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { PrinterRoutingModule } from './printer-routing.module';
import { PrinterComponent } from './printer.component';
import { FormTdComponent } from './form-td/form-td.component';

@NgModule({
  imports: [
    CommonModule,
    PrinterRoutingModule,
    FormsModule
  ],
  declarations: [PrinterComponent, FormTdComponent],
  exports: [PrinterComponent]
})
export class PrinterModule { }
