import { Routes } from '@angular/router';import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios-component/usuarios-component.component';
;

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];