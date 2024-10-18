import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'estudiantes', component: EstudiantesComponent },  
  { path: '', redirectTo: '/login', pathMatch: 'full' } ,
  { path: 'about', component: AboutComponent }, 
];
