import { Injectable } from '@angular/core';
import { RequestService } from '../core/request.service';
import { GlobalsService } from '../core/globals.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICustomer } from 'src/app/interfaces/ICustomer';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(
    private api: RequestService,
    private global: GlobalsService
  ) { }

  getCustomers(): Observable<ICustomer[]> {
    return this.api.get('users').pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );
  }

  addNewCustomer(body: any): Observable<any> {
    return this.api.post('users', body).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    )
  }

  getCustomerInfo(customerId: number): Observable<ICustomer[]> {
    return this.api.get(`users/${customerId}`).pipe(
      catchError(error => {
        return throwError(() => error)
      })
    )
  }

  updateCustomer(customer: any): Observable<any> {
    return this.api.update('user', customer).pipe(
      catchError(error => {
        return throwError(() => error)
      })
    )
  }

  deteleCustomer(customerId: number): Observable<any> {
    return this.api.delete(`users/${customerId}`).pipe(
      catchError(error => {
        return throwError(() => error)
      })
    )
  }
}
