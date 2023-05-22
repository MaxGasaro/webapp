import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //const token = localStorage.getItem('authToken');
    this.authService.currentUser$.pipe(take(1)).subscribe({
      next: user => {
        if (user) {
          req = req.clone({
            setHeaders: { Authorization: `Bearer ${user.token}` },
          });
        }
      }
    })

    return next.handle(req);
  }
}
