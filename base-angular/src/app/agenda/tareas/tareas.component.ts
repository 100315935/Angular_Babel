import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  sTarea: string;
  aTareas: string[];

  constructor() { }

  ngOnInit() {
    this.aTareas = new Array<string> ();
  }

  addTarea() {
    this.aTareas.push(this.sTarea);
  }
  deleteTarea(i) {
    this.aTareas.splice(i, 1);
  }

}
