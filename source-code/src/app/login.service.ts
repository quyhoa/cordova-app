import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';

import { Login } from './login';
import { LoginCarplus } from './login-carplus';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlLoginPolan = 'http://103.18.6.158:1111/api/auth/login';
  private urlLoginCarplus = 'http://cartplus-api.loc/api/user/login';

  constructor(private http: HttpClient) { }

  loginPolan (data:Login) {
    return this.http.post(this.urlLoginPolan, data, httpOptions)
    .pipe(
      map(data => data),
      tap(data => data),
      // catchError(this.handleError())
    );
  }

  loginCarplus (data:LoginCarplus) {
    return this.http.post(this.urlLoginCarplus, data, httpOptions)
    .pipe(
      map(data => data),
      tap(data => data),
    );
  }

  // protected handleError (error: Response | any) {
  //     // In a real world app, you might use a remote logging infrastructure
  //     let errMsg: any;
  //     if (error instanceof Response) {
  //       const body = error.json() || '';
  //       const err = body || JSON.stringify(body);
  //       errMsg = err;
  //     } else {
  //       errMsg = error;
  //     }
  //     console.error(errMsg);
  //     // return Observable.throw(errMsg);
  //     return errMsg;
  //   }


   //   /**
   // * Handle Http operation that failed.
   // * Let the app continue.
   // * @param operation - name of the operation that failed
   // * @param result - optional value to return as the observable result
   // */
    // private handleError (operation = 'operation') {
    //   return (error: any) => error;
    //   // return (error: any): Observable<any> => {
    //   //   return error;
    //   // };
    // }
}
