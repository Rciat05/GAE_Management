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
    // Llamar al servicio de autenticación...
    this.usuarioService.login(this.correo, this.contrasena).subscribe(
      (data) => {
        // Si el login es exitoso, redirige al dashboard u otra página
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
