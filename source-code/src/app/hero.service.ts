import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of} from 'rxjs';//same callback function
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
    private heroesUrl = 'api/heroes';  // URL to web api

    private urlTest = 'http://cartplus-api.loc/api/test/index';
    private urlTestPost = 'http://cartplus-api.loc/api/test/detail';
    private urlLoginPolan = 'http://103.18.6.158:1111/api/auth/login';
    private urlLoginCarplus = "http://cartplus-api.loc/api/user/login";

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }
  
    getHeroes(): Observable<Hero[]> {
      // TODO: send the message _after_ fetching the heroes
      return this.http.get<Hero[]>(this.urlTest)
      .pipe(
        map(data => data),
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
    }

    getApi(): Observable<Hero[]> {
      // TODO: send the message _after_ fetching the heroes
      return this.http.get<Hero[]>(this.urlTest)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
    }
    postApi(hero:Hero): Observable<any>{
      return this.http.post<Hero>(this.heroesUrl, 'hero', httpOptions).pipe(
        tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      );
    }
 
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
    // TODO: send the message _after_ fetching the hero
    // this.messageService.add('HeroService: fetched hero id='+`${id}`);//the backticks ( ` ) that define a JavaScript template literal for embedding the id.
    // return of(HEROES.find(hero => hero.id === id));
  }

  /** PUT: update the hero on the server */
  updateHero (hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.urlTestPost, hero, httpOptions)
    .pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

    loginPolan () {
      let data = {email:"duc4@runsystem.net",
      password:"123321",
      os_type:1}
    return this.http.post(this.urlLoginPolan, data, httpOptions)
    .pipe(
      tap(data => data),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
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
   
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
   
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
