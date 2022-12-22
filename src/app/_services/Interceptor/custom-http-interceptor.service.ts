import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomHttpInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log("interceptor: " + req.url);
    let strURL =
      'https://crudcrud.com/' +
      req.url.replace('api/', 'api/8e0046a64e10474da9f134f82c606e65/');

    req = req.clone({
      url: strURL,
    });

    return next.handle(req);
  }
}
