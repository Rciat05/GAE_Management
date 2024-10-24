import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authService.getCurrentUser();

    if (currentUser) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
