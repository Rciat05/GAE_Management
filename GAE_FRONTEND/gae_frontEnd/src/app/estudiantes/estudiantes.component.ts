import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa el CommonModule
import { EstudianteService } from '../Services/estudiante.service';
import { EstudianteModel } from '../Models/estudiante.model';

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  templateUrl: './estudiantes.component.html',
  imports: [CommonModule]
})
export class EstudiantesComponent {
  estudiantes: EstudianteModel[] = [];

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.cargarEstudiantes();
  }

  cargarEstudiantes(): void {
    this.estudianteService.getEstudiantes().subscribe(
      (data) => {
        this.estudiantes = data;
        console.log('Estudiantes cargados: ', this.estudiantes);
      },
      (error) => {
        console.error('Error al obtener estudiantes:', error);
      }
    );
  }

  
}
