import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstudianteModel } from '../Models/estudiante.model';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private apiUrl = 'http://localhost:5210/api/v1/Estudiantes'; 

  constructor(private http: HttpClient) { }

  // GET: Obtener todos los estudiantes
  getEstudiantes(): Observable<EstudianteModel[]> {
    return this.http.get<EstudianteModel[]>(`${this.apiUrl}/get`);
  }

  // POST: Crear estudiante (con manejo de respuesta en texto)
  addEstudiante(estudiante: EstudianteModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/add`, estudiante, { headers, responseType: 'text' });
  }

  // GET: Obtener estudiante por carnet
  getEstudiantePorCarnet(carnet: string): Observable<EstudianteModel> {
    return this.http.get<EstudianteModel>(`${this.apiUrl}/${carnet}`);
  }

  // PUT: Actualizar estudiante
  updateEstudiante(estudiante: EstudianteModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.apiUrl}/update`, estudiante, { headers, responseType: 'text' });
  }

  // DELETE: Eliminar estudiante
  deleteEstudiante(carnet: string) {
    return this.http.delete(`http://localhost:5210/api/v1/Estudiantes/delete/${carnet}`, { responseType: 'text' });
  }
  

}
