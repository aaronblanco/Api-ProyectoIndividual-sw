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
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { NewCharacterComponent } from './new-character/new-character.component';
import { FormsModule } from '@angular/forms';
import { CharacterInfoComponent } from './character-info/character-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    StarshipComponent,
    PlanetComponent,
    CharacterComponent,
    IntroComponent,
    PageNotFoundComponentComponent,
    MessagesComponent,
    CharacterDetailComponent,
    PlanetDetailComponent,
    StarshipDetailComponent,
    FooterComponent,
    MenuComponent,
    HeaderComponent,
    NewCharacterComponent,
    CharacterInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
