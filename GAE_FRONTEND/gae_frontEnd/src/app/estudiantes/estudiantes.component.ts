import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa el CommonModule
import { EstudianteService } from '../Services/estudiante.service';
import { EstudianteModel } from '../Models/estudiante.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  templateUrl: './estudiantes.component.html',
  imports: [CommonModule]
})
export class EstudiantesComponent {
  estudiantes: EstudianteModel[] = [];

  constructor(private estudianteService: EstudianteService, private router: Router) {} // Inyecta Router aquí

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

  NewUser(): void {
    this.router.navigate(['/usuarios']); 
  }
  
}
