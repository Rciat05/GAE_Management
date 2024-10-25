import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioId = 1; // Ejemplo de ID, este valor debe venir del login
  private esAdmin = false; // Variable temporal; debería configurarse según los permisos reales

  obtenerUsuarioId(): number {
    return this.usuarioId;
  }

  verificarSiEsAdmin(): boolean {
    return this.esAdmin;
  }
}
