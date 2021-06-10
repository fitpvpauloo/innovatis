import { LoginServiceService } from './../views/login/login-service.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor  implements HttpInterceptor {

  
  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

      // Get the auth token from the service.
      const Token = localStorage.getItem('token'); 
      const id_usuario = localStorage.getItem('idUsuario'); 
      
      let newRequest: HttpRequest<any> = request;
      console.info(newRequest);
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      // const newRequest = request.clone({
        // setHeaders: { Authorization: `Bearer ${Token}`}});

        newRequest = request.clone({
          headers: request.headers.set('Authorization', `Bearer ${Token}, usuarioLogado ${id_usuario}`)
        });

        // headers: request.headers.set('Authorization','Bearer $(Token)')});
        console.info(newRequest);

      // send cloned request with header to the next handler.
        return next.handle(newRequest);

    }
}