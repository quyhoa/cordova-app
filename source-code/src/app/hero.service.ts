import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of} from 'rxjs';//same callback function
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
    private heroesUrl = 'http://cartplus-api.loc/api/category/list.json?client_id=1';  // URL to web api

  constructor(
      private messageService: MessageService) { }
    getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');//of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
    return of(HEROES);
  }
 
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add('HeroService: fetched hero id='+`${id}`);//the backticks ( ` ) that define a JavaScript template literal for embedding the id.
    return of(HEROES.find(hero => hero.id === id));
  }
}
