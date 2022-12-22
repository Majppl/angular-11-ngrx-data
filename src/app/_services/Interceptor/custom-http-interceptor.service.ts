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
    debugger;
    let strURL =
      'https://crudcrud.com/' +
      req.url.replace('api/', 'api/25afb662857e4b58b60f3d5e737f117d/');

    req = req.clone({
      url: strURL,
    });

    return next.handle(req);
  }
}
