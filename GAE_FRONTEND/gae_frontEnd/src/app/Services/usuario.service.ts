import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../Models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'https://localhost:5001/api/v1/usuarios';  // URL de tu API backend

  constructor(private http: HttpClient) { }

  // Obtener todos los usuarios
  getUsuarios(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(`${this.apiUrl}/get`);
  }

  // Obtener usuario por ID
  getUsuarioById(id: number): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${this.apiUrl}/get/${id}`);
  }

  // Agregar un nuevo usuario
  addUsuario(usuario: UsuarioModel): Observable<UsuarioModel> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<UsuarioModel>(`${this.apiUrl}/add`, usuario, { headers });
  }

  // Actualizar un usuario
  updateUsuario(usuario: UsuarioModel): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<void>(`${this.apiUrl}/update`, usuario, { headers });
  }

  // Eliminar un usuario
  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }


  login(correo: string, contrasena: string): Observable<UsuarioModel> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<UsuarioModel>(`${this.apiUrl}/login`, { correo, contrasena }, { headers });
  }
  

}
