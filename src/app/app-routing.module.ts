import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { FormularioAlumnoComponent } from './formulario-alumno/formulario-alumno.component';

const routes: Routes = [
  {path:'', component: ListaAlumnosComponent,children: [
    {path: 'modificar/:id', component: FormularioAlumnoComponent},
    {path: 'alta', component: FormularioAlumnoComponent}
  ]},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
