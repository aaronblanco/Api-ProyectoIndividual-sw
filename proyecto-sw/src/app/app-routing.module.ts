import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { IntroComponent } from './intro/intro.component';
import { PlanetComponent } from './planet/planet.component';
import { StarshipComponent } from './starship/starship.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { NewCharacterComponent } from './new-character/new-character.component';
/*Creamos las rutas.*/ 
const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'starship', component: StarshipComponent },
  { path: 'planets', component: PlanetComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'character/newcharacter', component: NewCharacterComponent },
  { path: '**', component: PageNotFoundComponentComponent },
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
