import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url: string = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  get(routes: string): Observable<any> {
    return this.http.get(this.url + routes).pipe(
      catchError(error => throwError(() => new Error(error)))
    );
  }

  post(routes: string, data: any): Observable<any> {
    return this.http.post(this.url + routes, data).pipe(
      catchError(error => throwError(() => new Error(error)))
    );
  }

  update(routes: string, data: any): Observable<any> {
    return this.http.put(this.url + routes, data).pipe(
      catchError(error => throwError(() => new Error(error)))
    );
  }

  delete(routes: string, data: any = {}): Observable<any> {
    return this.http.get(this.url + routes, data).pipe(
      catchError(error => throwError(() => new Error(error)))
    );
  }
}
