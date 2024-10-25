import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteModel } from '../Models/estudiante.model';
import { EstudianteService } from '../Services/estudiante.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core'; 


@Component({
  selector: 'app-edit-estudiante',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-estudiante.component.html',

})
export class EditEstudianteComponent implements OnInit {
  estudiante: EstudianteModel = {
    carnet: '',
    nombre: '',
    apellido: '',
    telefono: '',
    carrera: '',
    modalidad: '',
    correo_estudiante: '',
    id_usuario: 0
  };


  constructor(private estudianteService: EstudianteService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const carnet = this.route.snapshot.paramMap.get('carnet');
    if (carnet) {
      this.estudianteService.getEstudiantePorCarnet(carnet).subscribe(
        (data) => {
          this.estudiante = data;
          console.log('Datos del estudiante cargados:', this.estudiante);
        },
        (error) => {
          console.error('Error al cargar el estudiante:', error);
        }
      );
    }
  }
  
  onSubmit(): void {
    console.log('Formulario enviado');  // Verificar si el método onSubmit se ejecuta
  
    this.estudianteService.updateEstudiante(this.estudiante).subscribe(
      (response: string) => {
        console.log('Respuesta del servidor:', response);  // Mostrar la respuesta de texto
        console.log('Estudiante actualizado exitosamente');
        this.router.navigate(['/estudiantes']); // Intentar redirigir
      },
      (error) => {
        console.error('Error al actualizar estudiante:', error);  // Mostrar cualquier error
      }
    );
  }
  
  
  
  
  
}