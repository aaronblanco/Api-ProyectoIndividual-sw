import { Component, OnInit, Output } from '@angular/core';
import { Character } from '../character/character.model';
import { SwServicesService } from '../sw-services.service';
//activatedRoute?
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  name = 'app';
  mostrar = false;
  // characterListSub: Subscription;
   characterList: Character[] = [];
   id: string
   @Output () salir;

   constructor(private http: SwServicesService) { }
 
 
   ngOnInit() {
     this.getCharacters();
    
    
    }
 
    mostrarInfo(id): void{
      this.id = id;
      this.mostrar = true;

    }


   getCharacters(): void {
     this.http.getCharacters()
     .subscribe(characters => {this.characterList = characters
       console.log(characters);
     
     });
   }

}
