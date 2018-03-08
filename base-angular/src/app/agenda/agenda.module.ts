import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda.component';
import { TareasComponent } from './tareas/tareas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgendaRoutingModule
  ],
  declarations: [AgendaComponent, TareasComponent],
  exports: [AgendaComponent]
})
export class AgendaModule { }
