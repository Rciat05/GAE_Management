import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { AboutComponent } from './about/about.component';
import { GestionUsuariosComponent } from './gestion-usuarios-component/gestion-usuarios-component.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'estudiantes', component: EstudiantesComponent },  
  { path: 'usuarios', component: GestionUsuariosComponent }, // Nueva ruta
  { path: '', redirectTo: '/login', pathMatch: 'full' } ,
  { path: 'about', component: AboutComponent }, 
];
