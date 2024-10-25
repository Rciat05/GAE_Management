import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa el CommonModule
import { EstudianteService } from '../Services/estudiante.service';
import { EstudianteModel } from '../Models/estudiante.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core'; // Importar ChangeDetectorRef

//imports pdf y excel xd
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';


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
              private router: Router,
              private route: ActivatedRoute,
              private cdr: ChangeDetectorRef
            ) {} 

  ngOnInit(): void {
    this.cargarEstudiantes();
  }

  cargarEstudiantes(): void {
    this.estudianteService.getEstudiantes().subscribe(
      (data) => {
        this.estudiantes = data;
        console.log('Estudiantes cargados: ', this.estudiantes);
        this.cdr.detectChanges(); // Forzar la detección de cambios
      },
      (error) => {
        console.error('Error al obtener estudiantes:', error);
      }
    );
  }

  
  editarEstudiante(estudiante: EstudianteModel): void {
    // Navegar a la página de edición con el carnet del estudiante
    this.router.navigate(['/edit-estudiante', estudiante.carnet])
      .then(() => {
        // Detectar cambios tras la redirección si es necesario
        this.cdr.detectChanges();
      });
  }
  eliminarEstudiante(carnet: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar a este estudiante?')) {
      console.log('Intentando eliminar estudiante con carnet:', carnet);
      this.estudianteService.deleteEstudiante(carnet).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response); // Ahora deberías ver el mensaje del servidor en consola
          this.cargarEstudiantes(); // Volver a cargar la lista actualizada
          this.cdr.detectChanges(); // Forzar la actualización visual de la lista
        },
        (error) => {
          console.error('Error al eliminar estudiante:', error);
        }
      );
    }
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
  
  

    exportToPDF(): void {
      const doc = new jsPDF();
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(16);
      doc.text('Sistema GAE - Lista Estudiantes', 90, 10, {align: 'center'});
    
      let y = 20;
      doc.setFontSize(10);
      doc.setFont('Helvetica', 'normal');
      
      // Encabezados de la tabla
      doc.text('Carnet', 10, y);
      doc.text('Nombre', 40, y);
      doc.text('Apellido', 80, y);
      doc.text('Teléfono', 120, y);
      doc.text('Carrera', 160, y);
      y += 10;
    
      this.estudiantes.forEach(estudiante => {
        doc.text(estudiante.carnet, 10, y);
        doc.text(estudiante.nombre, 40, y);
        doc.text(estudiante.apellido, 80, y);
        doc.text(estudiante.telefono, 120, y);
        doc.text(estudiante.carrera, 160, y);
        y += 10;
      });
    
      doc.save('estudiantes.pdf');
    }
    
    exportToExcel(): void {
      const worksheet = XLSX.utils.json_to_sheet(this.estudiantes);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Estudiantes');
    
      XLSX.writeFile(workbook, 'estudiantes.xlsx');
    }
    


}