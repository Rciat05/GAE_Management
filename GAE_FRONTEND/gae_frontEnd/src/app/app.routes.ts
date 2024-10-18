import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'estudiantes', component: EstudiantesComponent },  // Ruta para los estudiantes
  { path: '', redirectTo: '/login', pathMatch: 'full' }  // Redirige al login por defecto
];
