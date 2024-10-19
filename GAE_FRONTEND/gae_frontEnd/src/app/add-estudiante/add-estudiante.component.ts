import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from '../Services/estudiante.service';
import { EstudianteModel } from '../Models/estudiante.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-estudiante',
  templateUrl: './add-estudiante.component.html',
  standalone: true, 
  imports: [FormsModule, CommonModule]

})
export class AddEstudianteComponent {
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

  constructor(private estudianteService: EstudianteService, private router: Router) {}

  onSubmit(): void {
    this.estudianteService.addEstudiante(this.estudiante).subscribe(
      () => {
        console.log('Estudiante agregado exitosamente');
        this.router.navigate(['/estudiantes']); // Regresa al listado de estudiantes
      },
      (error) => {
        console.error('Error al agregar estudiante:', error);
      }
    );
  }
}
