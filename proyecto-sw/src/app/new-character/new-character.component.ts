import { Component, OnInit } from '@angular/core';
import { Character } from '../character/character.model';
import { SwServicesService } from '../sw-services.service';


@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css']
})
export class NewCharacterComponent implements OnInit {

  characters: Character[];


  character = new Character(0, '', 0, '', '', '', '');
 

  constructor(private characterService: SwServicesService) { }

  ngOnInit(): void {
  }
 
  addCharacter(){
  this.characterService.addCharacter(this.character)
  .subscribe(character => {
    this.characters.push(character);
  });

  }



}
