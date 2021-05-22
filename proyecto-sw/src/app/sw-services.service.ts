import { Injectable } from '@angular/core';
import { API_URL } from './env';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Character } from './character/character.model';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Planet } from './planet/planet.model';
import { Starship } from './starship/starship.model';


@Injectable({
  providedIn: 'root'
})
export class SwServicesService {
  private characterUrl = `${API_URL}/character`;
  private planetUrl = `${API_URL}/planet`;
  private starshipUrl = `${API_URL}/starship`;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /**
   * Constructor con el servicio de mensajes para los logs y las peticiones http.
   * @param http 
   * @param messageService 
   */
  constructor(private http: HttpClient, private messageService: MessageService) {

  }

/**
 * 
 * @returns Devuelve una lista de objetos observables, es el resultado de la petición, si existe algún problema, salta el error.
 */
  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.characterUrl)
      .pipe(
        tap(_ => this.log('fetched character')),
        catchError(this.handleError<Character[]>('getCharacters', []))
      );
  }

  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.planetUrl)
      .pipe(
        tap(_ => this.log('fetched planets')),
        catchError(this.handleError<Planet[]>('getPlanets', []))
      );
  }

  getStarships(): Observable<Starship[]> {
    return this.http.get<Starship[]>(this.starshipUrl)
      .pipe(
        tap(_ => this.log('fetched starship')),
        catchError(this.handleError<Starship[]>('getStarships', []))
      );
  }





  

/** GET Character by id. Will 404 if id not found */
getCharacter(id: number): Observable<Character> {
  const url = `${this.characterUrl}/${id}`;
  return this.http.get<Character>(url).pipe(
    tap(_ => this.log(`fetched Character id=${id}`)),
    catchError(this.handleError<Character>(`getCharacterId id=${id}`))
  );
}


 /** GET Character by id. Return `undefined` when id not found */
 getCharacterNo404<Data>(id: number): Observable<Character> {
  const url = `${this.characterUrl}/?id=${id}`;
  return this.http.get<Character[]>(url)
    .pipe(
      map(characters => characters[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} Character id=${id}`);
      }),
      catchError(this.handleError<Character>(`getCharacter id=${id}`))
    );
}




/** GET Planet by id. Will 404 if id not found */
getPlanet(id: number): Observable<Planet> {
  const url = `${this.planetUrl}/${id}`;
  return this.http.get<Planet>(url).pipe(
    tap(_ => this.log(`fetched Planet id=${id}`)),
    catchError(this.handleError<Planet>(`getPlanet id=${id}`))
  );
}

getPlanetNo404<Data>(id: number): Observable<Planet> {
  const url = `${this.planetUrl}/?id=${id}`;
  return this.http.get<Planet[]>(url)
    .pipe(
      map(planets => planets[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} Planet id=${id}`);
      }),
      catchError(this.handleError<Planet>(`getPlanet id=${id}`))
    );
}

/** GET Starship by id. Will 404 if id not found */
getStarship(id: number): Observable<Starship> {
  const url = `${this.characterUrl}/${id}`;
  return this.http.get<Starship>(url).pipe(
    tap(_ => this.log(`fetched Character id=${id}`)),
    catchError(this.handleError<Starship>(`getStarship id=${id}`))
  );
}

getStarshipNo404<Data>(id: number): Observable<Starship> {
  const url = `${this.characterUrl}/?id=${id}`;
  return this.http.get<Starship[]>(url)
    .pipe(
      map(starships => starships[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} Starship id=${id}`);
      }),
      catchError(this.handleError<Starship>(`getStarship id=${id}`))
    );
}



/* GET Characteres whose name contains search term */

/*

SIRVE PARA PONER UNA BARRA DE BUSQUEDA
searchCharacteres(term: string): Observable<Character[]> {
  if (!term.trim()) {
    // if not search term, return empty Character array.
    return of([]);
  }
  return this.http.get<Character[]>(`${this.characterUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found Characteres matching "${term}"`) :
       this.log(`no Characteres matching "${term}"`)),
    catchError(this.handleError<Character[]>('searchCharacteres', []))
  );
}

  */

  //////// Save methods //////////

  /** POST: add a new Character to the server */
  addCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(this.characterUrl, character, this.httpOptions).pipe(
      tap((newCharacter: Character) => this.log(`added Character w/ id=${newCharacter.id}`)),
      catchError(this.handleError<Character>('addCharacter'))
    );
  }
  /** POST: add a new Starship to the server */
  addStarship(starship: Starship): Observable<Starship> {
    return this.http.post<Starship>(this.starshipUrl, starship, this.httpOptions).pipe(
      tap((newStarship: Starship) => this.log(`added Starship w/ id=${newStarship.id}`)),
      catchError(this.handleError<Starship>('addStarship'))
    );
  }
  /** POST: add a new Planet to the server */
  addPlanet(planet: Planet): Observable<Planet> {
    return this.http.post<Planet>(this.planetUrl, planet, this.httpOptions).pipe(
      tap((newPlanet: Planet) => this.log(`added Planet w/ id=${newPlanet.id}`)),
      catchError(this.handleError<Planet>('addPlanet'))
    );
  }


  /** PUT: update the character on the server */
  updateCharacter(character: Character): Observable<any> {
    return this.http.put(this.characterUrl, character, this.httpOptions).pipe(
      tap(_ => this.log(`updated character id=${character.id}`)),
      catchError(this.handleError<any>('updateCharacter'))
    );
  }

  /** PUT: update the planet on the server */
  updatePlanet(planet: Planet): Observable<any> {
    return this.http.put(this.planetUrl, planet, this.httpOptions).pipe(
      tap(_ => this.log(`updated planet id=${planet.id}`)),
      catchError(this.handleError<any>('updatePlanet'))
    );
  }

  /** PUT: update the starship on the server */
  updateStarship(starship: Starship): Observable<any> {
    return this.http.put(this.starshipUrl, starship, this.httpOptions).pipe(
      tap(_ => this.log(`updated starship id=${starship.id}`)),
      catchError(this.handleError<any>('updateStarship'))
    );
  }


  private log(message: string) {
    this.messageService.add(`SwServicesService: ${message}`);
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}



