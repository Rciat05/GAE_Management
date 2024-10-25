import { Component, OnInit } from '@angular/core';
import { ReporteProblemaService } from '../Services/reporte-problema.service';
import { UsuarioService } from '../Services/usuario.service';  // Servicio para cargar estudiantes
import { ReporteProblemaModel } from '../Models/reporte-problema.model';
import { UsuarioModel } from '../Models/usuario.model';  // Modelo de usuario
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

//imports pdf y excel xd
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';

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

  tipo_usuario: string = ''; // Define el rol del usuario actual

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




//probando si genera pdf y excel 
exportToPDF(): void {
  const doc = new jsPDF();
   // Título del sistema
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('Sistema GAE - Reportes', 105, 20, { align: 'center' });

  // Línea separadora debajo del título
  doc.setLineWidth(0.5);
  doc.line(10, 25, 200, 25);

  let y = 40; // Posición inicial de los elementos después del título
  doc.setFontSize(12);
  doc.setFont('Helvetica', 'normal');

  // Encabezados de la tabla
  doc.text('ID', 10, y);
  doc.text('Estudiante', 30, y);
  doc.text('Descripción', 70, y);
  doc.text('Estado', 150, y);
  
  y += 10;

  // Recorre los reportes y añádelos al PDF
  this.reportes.forEach(reporte => {
    doc.setFontSize(10);
    doc.text(reporte.id_reporte.toString(), 10, y);
    doc.text(reporte.id_usuario.toString(), 30, y);
    doc.text(reporte.descripcion, 70, y, { maxWidth: 50 }); // Limita el ancho para la descripción

    // Cambia el color del texto según el estado
  if (reporte.estado === 'pendiente') {
    doc.setTextColor(255, 99, 71); // Rojo claro
  } else if (reporte.estado === 'en proceso') {
    doc.setTextColor(255, 165, 0); // Anaranjado
  } else if (reporte.estado === 'resuelto') {
    doc.setTextColor(0, 128, 0); // Verde
  }
    
    doc.text(reporte.estado, 150, y);

     // Restablecer el color del texto a negro para las siguientes líneas
  doc.setTextColor(0, 0, 0);


    y += 20;//espacio hacia abajo, filas
  });

  // Pie de página u otra información adicional
  doc.setFontSize(10);
  doc.text('Reporte generado automáticamente por el sistema GAE', 10, 290);

  // Guardar el PDF
  doc.save('reportes.pdf');
}




exportToExcel(): void {
  const worksheet = XLSX.utils.json_to_sheet(this.reportes);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Reportes');

  XLSX.writeFile(workbook, 'reportes.xlsx');
}

}