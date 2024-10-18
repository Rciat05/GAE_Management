import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Services/usuario.service';
import { UsuarioModel } from '../Models/usuario.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios-component.component.html',
  standalone: true, // Asegúrate de que esto está habilitado
  imports: [FormsModule, CommonModule], // Agrega FormsModule aquí

})
export class GestionUsuariosComponent implements OnInit {
  usuarios: UsuarioModel[] = [];
  usuario: UsuarioModel = { id_usuario: 0, correo: '', contrasena: '', tipo_usuario: '', fecha_registro: new Date() };

  constructor(private usuarioService: UsuarioService) {}

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
      this.usuarioService.updateUsuario(this.usuario).subscribe(() => {
        this.obtenerUsuarios();
        this.limpiarFormulario();
      });
    } else {
      this.usuarioService.addUsuario(this.usuario).subscribe(() => {
        this.obtenerUsuarios();
        this.limpiarFormulario();
      });
    }
  }

  editUsuario(usuario: UsuarioModel): void {
    this.usuario = { ...usuario }; // Carga el usuario seleccionado en el formulario
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
