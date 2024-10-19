import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Services/usuario.service';
import { UsuarioModel } from '../Models/usuario.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  standalone: true, 
  imports: [FormsModule, CommonModule], 

})
export class GestionUsuariosComponent implements OnInit {
  usuarios: UsuarioModel[] = [];
  usuario: UsuarioModel = { id_usuario: 0, correo: '', contrasena: '', tipo_usuario: '', fecha_registro: new Date() };

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(
      (data: UsuarioModel[]) => {
        this.usuarios = data;
      },
      error => {
        console.error('Error al obtener los usuarios', error);
      }
    );
  }

  onSubmit(): void {
    if (this.usuario.id_usuario) {
      this.usuarioService.updateUsuario(this.usuario).subscribe({
        next: () => {
          this.obtenerUsuarios();
          this.limpiarFormulario();
        },
        error: (err) => {
          console.error('Error actualizando el usuario', err);
        }
      });
    } else {
      this.usuarioService.addUsuario(this.usuario).subscribe({
        next: () => {
          this.obtenerUsuarios();
          this.limpiarFormulario();
        },
        error: (err) => {
          console.error('Error agregando el usuario', err);
        }
      });
    }
  }
  

  editUsuario(usuario: UsuarioModel): void {
    this.usuario = { ...usuario }; 
  }

  deleteUsuario(id: number): void {
    this.usuarioService.deleteUsuario(id).subscribe(() => {
      this.obtenerUsuarios();
    });
  }

  limpiarFormulario(): void {
    this.usuario = { id_usuario: 0, correo: '', contrasena: '', tipo_usuario: '', fecha_registro: new Date() };
  }
}
