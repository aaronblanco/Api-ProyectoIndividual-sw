import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../character/character.model';
import { SwServicesService } from '../sw-services.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {

  @Input() characterId : number;
  @Output() newItemEvent = new EventEmitter<string>();
  characterInfo: Character;

  constructor(private http: SwServicesService) { }
//llamada a get character id
  ngOnInit(): void {
 
    this.http.getCharacter(this.characterId)
     .subscribe(character => {this.characterInfo = character,
     console.log(this.characterInfo)
     });

     
  }
  //El cerrar emite un valor gracias al decorador output y al html.
  close(value: string) {
    this.newItemEvent.emit(value);
  }
  

}
