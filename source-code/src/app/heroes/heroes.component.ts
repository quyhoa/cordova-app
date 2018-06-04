import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    heroes: Hero[];
    onSelect(hero:Hero): void {
        this.selectedHero = hero;
    }
    constructor( 
        private http: HttpClient,
        private heroService:HeroService) { }
    ngOnInit() {
        this.getHeroes();
        this.getApt();
    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }

    getApt():void {
        console.log('test api');
        const urlApt = 'http://cartplus-api.loc/api/category/list.json?client_id=1';
        // test api
        this.http.get(urlApt).subscribe(data => {
          console.log(data);
        },
        err => {
          console.log("Error occured");
        });
        // end
    }

}
