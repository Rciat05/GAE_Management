
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuario/usuarios.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
