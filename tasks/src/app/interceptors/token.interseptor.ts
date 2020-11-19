import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {
  constructor(public authService: AuthService) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    if (token) {
      const authReq = req = req.clone({
        setHeaders: {
          Authentication: localStorage.getItem('token')
        }
      })
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}