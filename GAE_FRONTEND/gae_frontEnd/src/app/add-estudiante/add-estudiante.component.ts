import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from '../Services/estudiante.service';
import { EstudianteModel } from '../Models/estudiante.model';
import { UsuarioModel } from '../Models/usuario.model';
import { UsuarioService } from '../Services/usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-estudiante',
  templateUrl: './add-estudiante.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class AddEstudianteComponent implements OnInit {
  estudiante: EstudianteModel = {
    carnet: '',
    nombre: '',
    apellido: '',
    telefono: '',
    carrera: '',
    modalidad: '',
    correo_estudiante: '',
    IdUsuario: 0
  };
  usuarios: UsuarioModel[] = [];

  constructor(private estudianteService: EstudianteService, private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.cargarUsuariosEstudiantes();
  }

  cargarUsuariosEstudiantes(): void {
    this.usuarioService.getUsuariosEstudiantes().subscribe(
      (data) => {
        this.usuarios = data; // Asumiendo que obtienes una lista de estudiantes
      },
      (error) => {
        console.error('Error al obtener estudiantes:', error);
      }
    );
  }

  onSubmit(): void {
    this.estudianteService.addEstudiante(this.estudiante).subscribe(
      () => {
        console.log('Estudiante agregado exitosamente');
        this.router.navigate(['/estudiantes']);
      },
      (error) => {
        console.error('Error al agregar estudiante:', error);
      }
    );
  }
}
