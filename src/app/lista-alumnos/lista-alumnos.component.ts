import { Component } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';
import { Alumno } from '../models/Alumno';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {

    alumnos: Alumno[]= [];

    constructor(private alumnosService: AlumnosService) {
     }

    ngOnInit() {
      this.alumnosService.showAlumnos().subscribe(alumnos => this.alumnos = alumnos);
    }



}
