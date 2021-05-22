import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Character } from '../character/character.model';
import { Starship } from '../starship/starship.model';
import { SwServicesService } from '../sw-services.service';


@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css']
})
export class NewCharacterComponent implements OnInit {

  characters: Character[];
  starshipList: Starship[] = [];
  
  starship = []
  character = new Character(0, '', 0, '', '', '', '', this.starship);
  card = new Character(0, '', 0, '', '', '', '', this.starship);

  constructor(private http: SwServicesService) { }

  ngOnInit(): void {
   this.getStarships();
  }
 

  addCharacter(form: NgForm){
    console.log(this.character);
  this.http.addCharacter(this.character)
  .subscribe(character => {
    this.characters.push(character);
  });
  form.reset();
  this.getCard(this.character);
  }

  getCard(character){
    this.http.getCharacter(character.id).subscribe(character => {
      this.card = character
  });

  }

  getStarships(): void {
    this.http.getStarships()
    .subscribe(starships => {this.starshipList = starships
      console.log(starships);
    
    });
  }

}
