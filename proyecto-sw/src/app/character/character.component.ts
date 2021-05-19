import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SwServicesService } from '../sw-services.service';
import { Character } from './character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  name = 'app';
 // characterListSub: Subscription;
  characterList: Character[] = [];
  
  constructor() { }


  ngOnInit() {
   
  }

 

/*
  ngOnInit(): void {
    this.characterListSub = this.http.getCharacters().subscribe(res => {
      this.characterList = res;
     
    },
    console.error
    );

  }
*/

/*

  ngOnDestry(){
    this.characterListSub.unsubscribe();
  }*/
}
