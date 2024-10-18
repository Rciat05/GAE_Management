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

    const correoTest = "Alumno@example.com";  // Usa un correo existente de la BD
  const contrasenaTest = "Contra123";   // Usa una contraseña correcta

  this.usuarioService.login(correoTest, contrasenaTest).subscribe(
    (data) => {
      console.log("Login exitoso", data);
      this.router.navigate(['/dashboard']);
    },
    (error) => {
      console.error('Login fallido', error);
      alert('Correo o contraseña incorrectos');
    }
  );

    console.log('Correo:', this.correo);
    console.log('Contraseña:', this.contrasena);
    // Llamar al servicio de autenticación...
    this.usuarioService.login(this.correo, this.contrasena).subscribe(
      (data) => {
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Si el login falla, muestra un mensaje de error
        console.error('Login failed', error);
        alert('Correo o contraseña incorrectos');
      }
    );
  }

  

}
