import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { AboutComponent } from './about/about.component';
import { GestionUsuariosComponent } from './gestion-usuarios-component/gestion-usuarios.component';
import { AddEstudianteComponent } from './add-estudiante/add-estudiante.component';
import { ReporteProblemaComponent } from './reporte-problema/reporte-problema.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'estudiantes', component: EstudiantesComponent},  
  { path: 'usuarios', component: GestionUsuariosComponent }, 
  { path: '', redirectTo: '/login', pathMatch: 'full' } ,
  { path: 'about', component: AboutComponent },
  { path: 'add-estudiante', component: AddEstudianteComponent },
  { path: 'reporte-problema', component: ReporteProblemaComponent } 
];
