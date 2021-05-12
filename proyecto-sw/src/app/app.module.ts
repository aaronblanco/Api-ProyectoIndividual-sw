import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { StarshipComponent } from './starship/starship.component';
import { PlanetComponent } from './planet/planet.component';
import { CharacterComponent } from './character/character.component';
import { IntroComponent } from './intro/intro.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    StarshipComponent,
    PlanetComponent,
    CharacterComponent,
    IntroComponent,
    PageNotFoundComponentComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
