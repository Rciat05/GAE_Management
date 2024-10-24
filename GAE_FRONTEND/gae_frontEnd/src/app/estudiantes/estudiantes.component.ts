import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa el CommonModule
import { EstudianteService } from '../Services/estudiante.service';
import { EstudianteModel } from '../Models/estudiante.model';
import { Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-estudiantes',
  standalone: true,
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css'],
  imports: [CommonModule,  
    MatSidenavModule,   
    MatButtonModule,   
    NgFor]
})
export class EstudiantesComponent {



  estudiantes: EstudianteModel[] = [];

  constructor(private estudianteService: EstudianteService, 
    
    private router: Router) {} 

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


  agregarEstudiante(): void {
    // Navegar a la ruta del formulario de agregar estudiante
    this.router.navigate(['/add-estudiante']);
  }

  NewReport(): void {
    this.router.navigate(['/reporte-problema']); 
  }

  logout() {
    this.router.navigate(['/login']); 
    }
  
  
}