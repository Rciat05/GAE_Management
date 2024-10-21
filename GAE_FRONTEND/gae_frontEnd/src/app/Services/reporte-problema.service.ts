import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ReporteProblemaModel } from '../Models/reporte-problema.model';

@Injectable({
  providedIn: 'root'
})
export class ReporteProblemaService {
  private apiUrl = 'http://localhost:5210/api/v1/ReportesProblemas';  // URL base de la API

  constructor(private http: HttpClient) { }

  // GET: Obtener todos los reportes de problemas
  getReportesProblemas(): Observable<ReporteProblemaModel[]> {
    return this.http.get<ReporteProblemaModel[]>(`${this.apiUrl}/get`);
  }

  // POST: Crear un nuevo reporte de problema
addReporteProblema(reporte: ReporteProblemaModel): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  // Cambiamos responseType a 'text' para manejar respuestas en texto plano
  return this.http.post(`${this.apiUrl}/add`, reporte, { headers, responseType: 'text' });
}


  // GET: Obtener un reporte de problema por ID
  getReporteProblemaPorId(idReporte: number): Observable<ReporteProblemaModel> {
    return this.http.get<ReporteProblemaModel>(`${this.apiUrl}/${idReporte}`);
  }

  // PUT: Actualizar un reporte de problema
  // PUT: Actualizar un reporte de problema
updateReporteProblema(reporte: ReporteProblemaModel): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.put(`${this.apiUrl}/update`, reporte, { headers, responseType: 'text' }).pipe(
    map(response => {
      return { success: true, message: response }; // Mapea la respuesta para que sea un objeto
    }),
    catchError(error => {
      console.error('Error al actualizar el reporte', error);
      return throwError(error);
    })
  );
}


  // DELETE: Eliminar un reporte de problema
deleteReporteProblema(idReporte: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/delete/${idReporte}`, { responseType: 'text' }).pipe(
    map(response => {
      // Si es necesario, puedes procesar la respuesta aquí
      return { success: true, message: response }; // Asegúrate de que sea un objeto
    }),
    catchError(error => {
      console.error('Error al eliminar el reporte', error);
      return throwError(error);
    })
  );
}

}
