import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../character/character.model';
import { SwServicesService } from '../sw-services.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {

  @Input() characterId : number;
  
  characterInfo: Character;

  constructor(private http: SwServicesService) { }
//llamada a get character id
  ngOnInit(): void {

    this.http.getCharacter(this.characterId)
     .subscribe(character => {this.characterInfo = character,
     console.log(this.characterInfo)
     });

     
  }

  

}
