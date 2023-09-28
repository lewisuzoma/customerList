import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { finalize, catchError, map, tap, filter } from 'rxjs/operators';
import { GlobalsService } from '../services/core/globals.service';


@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor {

  constructor(private global: GlobalsService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let headers: { [key: string]: string } = {
      'content-type': 'application/json',
      'realm': 'default',
    }

    if(true) headers['Authorization'] = `Bearer dfhdjfhdf`
    
    const modifiedReq = request.clone({
      setHeaders: headers
    });

    return next.handle(modifiedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle HTTP errors here
        if (error instanceof HttpErrorResponse) this.handleHttpError(error);
        return throwError(() => (error)); // Re-throw the error to propagate it further
      }),
      finalize(
        () => {

        }
      )
    )
  }


  private handleHttpError(error: HttpErrorResponse) {
    // Handle specific HTTP errors or global error handling here
    if (error.status === 401) {
       401
      // Handle Unauthorized error (e.g., redirect to login)
    } else if (error.status === 403) {
      // Handle Forbidden error
    } else {
      // Handle other HTTP errors (e.g., display a generic error message)
      console.error('HTTP error:', error);
      
    }
  }

}
