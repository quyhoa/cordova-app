import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DasboardComponent }   from './dasboard/dasboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { ScansComponent }  from './scans/scans.component';
import { LoginComponent }  from './login/login.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'heroes', component: HeroesComponent},
    { path: 'dashboard', component: DasboardComponent},
    { path: 'scans', component: ScansComponent},
    { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
