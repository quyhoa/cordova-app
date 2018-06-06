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
        private heroService:HeroService) { 

        this.heroService.loginPolan().subscribe(data => console.log(data));

        // this.heroService.getApi().subscribe(data => {
        //   console.log(data);
        // });
    }

    getPostApi(hero:Hero){
        this.heroService.postApi(hero).subscribe(data => {
          console.log(data);
        });
    }
    ngOnInit() {
        this.getHeroes();
        // this.getApt();
    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }

    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.heroService.addHero({ name } as Hero)
        .subscribe(
            // hero => {
            //   this.heroes.push(hero);
            // }
        );
    }

    delete(hero: Hero): void {
      this.heroes = this.heroes.filter(h => h !== hero);
      this.heroService.deleteHero(hero).subscribe();
    }

    getApt():void {
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
