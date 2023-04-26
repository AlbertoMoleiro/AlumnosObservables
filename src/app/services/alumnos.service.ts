import { Injectable } from '@angular/core';
import { Alumno } from '../models/Alumno';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  alumnos: Alumno[] = [
    {
      id: 1,
      dni: '11111111A',
      nombre: 'Juan',
      hrsFormacion: 100
    },
    {
      id: 2,
      dni: '22222222B',
      nombre: 'Ana',
      hrsFormacion: 200
    },
    {
      id: 3,
      dni: '33333333C',
      nombre: 'Luis',
      hrsFormacion: 300
    },
    {
      id: 4,
      dni: '44444444D',
      nombre: 'Maria',
      hrsFormacion: 400
    }];

  constructor() { }

  showAlumnos(): Observable<Alumno[]> {
    return of(this.alumnos);
  }

  findAlumno(id: number): Observable<Alumno> {
    let alumno = this.alumnos.find(alumno => alumno.id == id);
    return of(alumno ? alumno : { id: 0, dni: '', nombre: '', hrsFormacion: 0 });
  }

  saveAlumno(alumno: Alumno) {
    if (this.alumnos.findIndex(alumnoFind => alumno.id == alumnoFind.id) != -1) {
      this.modifyAlumno(alumno);
    }
    else {
      alumno.id = this.alumnos.length + 1;
      this.alumnos.push(alumno);
    }
  }

  modifyAlumno(alumno: Alumno) {
    let index = this.alumnos.findIndex(alumnoFind => alumnoFind.id == alumno.id);
    this.alumnos[index] = alumno;
  }
}
