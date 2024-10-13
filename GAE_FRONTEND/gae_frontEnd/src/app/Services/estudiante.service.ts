import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstudianteModel } from '../Models/estudiante.model';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private apiUrl = 'https://localhost:5001/api/v1/Estudiantes'; // Cambia a la URL de tu API

  constructor(private http: HttpClient) { }

  // GET: Obtener todos los estudiantes
  getEstudiantes(): Observable<EstudianteModel[]> {
    return this.http.get<EstudianteModel[]>(`${this.apiUrl}/get`);
  }

  // POST: Crear estudiante
  addEstudiante(estudiante: EstudianteModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/add`, estudiante, { headers });
  }

  // GET: Obtener estudiante por carnet
  getEstudiantePorCarnet(carnet: string): Observable<EstudianteModel> {
    return this.http.get<EstudianteModel>(`${this.apiUrl}/${carnet}`);
  }

  // PUT: Actualizar estudiante
  updateEstudiante(estudiante: EstudianteModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.apiUrl}/update`, estudiante, { headers });
  }

  // DELETE: Eliminar estudiante
  deleteEstudiante(carnet: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${carnet}`);
  }
}