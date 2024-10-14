import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Services/usuario.service';
import { UsuarioModel } from '../Models/usuario.model'

@Component({
  selector: 'app-usuarios-component',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
})
export class UsuariosComponent implements OnInit {
  usuarios: UsuarioModel[] = [];

  constructor(private usuarioService: UsuarioService) { }

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
}
