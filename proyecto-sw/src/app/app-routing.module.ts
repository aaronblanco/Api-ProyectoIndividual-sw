import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { IntroComponent } from './intro/intro.component';
import { PlanetComponent } from './planet/planet.component';
import { StarshipComponent } from './starship/starship.component';
/*Creamos las rutas.*/ 
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'starship', component: StarshipComponent },
  { path: 'planets', component: PlanetComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'intro', component: IntroComponent }
  /*
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent } */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
