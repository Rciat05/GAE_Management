import { Component } from '@angular/core';
import { UsuarioService } from '../Services/usuario.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: 'login.component.css',
  imports: [FormsModule]
})
export class LoginComponent {

  correo: string = '';
  contrasena: string = '';
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  
  onSubmit(): void {

    console.log('Correo:', this.correo);
    console.log('Contraseña:', this.contrasena);
  
    // Esta es la única llamada correcta al servicio de login
    this.usuarioService.login(this.correo, this.contrasena).subscribe(
      (data) => {
        console.log("Login exitoso", data);
        this.router.navigate(['/estudiantes']);
      },
      (error) => {
        console.error('Login fallido', error);
        console.log('Errores de validación:', error.error.errors);
        alert('Correo o contraseña incorrectos');
      }
    );
  }

  irSobreGAE(): void {
    this.router.navigate(['/about']); 
  }


}
