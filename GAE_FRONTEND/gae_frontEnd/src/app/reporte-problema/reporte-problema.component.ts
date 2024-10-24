import { Component, OnInit } from '@angular/core';
import { ReporteProblemaService } from '../Services/reporte-problema.service';
import { UsuarioService } from '../Services/usuario.service';  // Servicio para cargar estudiantes
import { ReporteProblemaModel } from '../Models/reporte-problema.model';
import { UsuarioModel } from '../Models/usuario.model';  // Modelo de usuario
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte-problema',
  templateUrl: './reporte-problema.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ReporteProblemaComponent implements OnInit {
  reportes: ReporteProblemaModel[] = [];
  estudiantes: UsuarioModel[] = [];  // Lista de estudiantes
  reporte: ReporteProblemaModel = { id_reporte: 0, id_usuario: 0, descripcion: '', fecha_reporte: new Date(), estado: 'pendiente' };

  constructor(
    private reporteProblemaService: ReporteProblemaService,
    private usuarioService: UsuarioService,  // Servicio para obtener estudiantes
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadReportes();
    this.loadEstudiantes();  // Cargar la lista de estudiantes
  }

  loadReportes(): void {
    this.reporteProblemaService.getReportesProblemas().subscribe(
      data => {
        this.reportes = data;
      },
      error => {
        console.error('Error al cargar los reportes de problemas', error);
      }
    );
  }

  loadEstudiantes(): void {
    this.usuarioService.getUsuarios().subscribe(
      data => {
        this.estudiantes = data.filter(usuario => usuario.tipo_usuario === 'Estudiante');  // Filtrar solo los estudiantes
      },
      error => {
        console.error('Error al cargar los estudiantes', error);
      }
    );
  }

  onSubmit(): void {
    if (this.reporte.id_reporte) {
      this.reporteProblemaService.updateReporteProblema(this.reporte).subscribe({
        next: (response) => {
          console.log(response.message); // Muestra el mensaje de éxito en la consola
          this.loadReportes(); // Recarga la lista de reportes
          this.clearForm(); // Limpia el formulario
        },
        error: (err) => {
          console.error('Error actualizando el reporte', err);
        }
      });
    } else {
      this.reporteProblemaService.addReporteProblema(this.reporte).subscribe({
        next: (response) => {
          console.log(response); // Muestra el mensaje de éxito en la consola
          this.loadReportes(); // Recarga la lista de reportes
          this.clearForm(); // Limpia el formulario
        },
        error: (err) => {
          console.error('Error agregando el reporte', err);
        }
      });
    }
  }
  

  updateReporteProblema(reporte: ReporteProblemaModel): void {
    this.reporteProblemaService.updateReporteProblema(reporte).subscribe({
      next: () => {
        console.log('Reporte actualizado correctamente');
        this.reporte = { ...reporte };  // Recargar los reportes
      },
      error: (err) => {
        console.error('Error al actualizar el reporte', err);
      }
    });
  }
  
  deleteReporte(id: number): void {
    this.reporteProblemaService.deleteReporteProblema(id).subscribe({
      next: (response) => {
        console.log(response.message); // Muestra el mensaje de éxito en la consola
        this.loadReportes(); // Recarga la lista de reportes
      },
      error: (err) => {
        console.error('Error al eliminar el reporte', err);
      }
    });
  }
  
  

  clearForm(): void {
    this.reporte = { id_reporte: 0, id_usuario: 0, descripcion: '', fecha_reporte: new Date(), estado: 'pendiente' };
  }

  Return(): void {
    this.router.navigate(['/estudiantes']); 
  }
}