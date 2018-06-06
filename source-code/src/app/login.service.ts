import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';

import { Login } from './login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlLoginPolan = 'http://103.18.6.158:1111/api/auth/login';

  constructor(private http: HttpClient) { }

  loginPolan (data:Login) {
    // let data = {email:"duc4@runsystem.net",
    //   password:"123321",
    //   os_type:1}
    return this.http.post(this.urlLoginPolan, data, httpOptions)
    .pipe(
      tap(data => data),
      catchError(this.handleError<any>('Thing tin login'))
    );
  }


     /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
   
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
   alert(`${operation} khong chinh xac`);
        // TODO: better job of transforming error for user consumption
        // this.log(`${operation} failed: ${error.message}`);
   
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
