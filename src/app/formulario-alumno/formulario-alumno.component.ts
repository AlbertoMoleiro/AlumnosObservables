import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Alumno } from '../models/Alumno';
import { AlumnosService } from '../services/alumnos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css']
})
export class FormularioAlumnoComponent {

  formularioAlumno: any; // FormGroup

  constructor(private alumnosService: AlumnosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      let alumno;

      this.alumnosService.findAlumno(id).subscribe(data => {
        alumno = data;
        this.formularioAlumno = new FormGroup({
          'id': new FormControl(alumno.id),
          'dni': new FormControl(alumno.dni),
          'nombre': new FormControl(alumno.nombre),
          'hrsFormacion': new FormControl(alumno.hrsFormacion)
        });
      });

    });
  }

  guardarAlumno() {
    let alumno: Alumno = {
      id: this.formularioAlumno.value.id,
      dni: this.formularioAlumno.value.dni,
      nombre: this.formularioAlumno.value.nombre,
      hrsFormacion: this.formularioAlumno.value.hrsFormacion
    };

    this.alumnosService.saveAlumno(alumno);
  }
}
