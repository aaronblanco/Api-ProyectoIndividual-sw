import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Starship } from '../starship/starship.model';
import { SwServicesService } from '../sw-services.service';

@Component({
  selector: 'app-new-starship',
  templateUrl: './new-starship.component.html',
  styleUrls: ['./new-starship.component.css']
})
export class NewStarshipComponent implements OnInit {
  starships: Starship[];
  starshipList: Starship[] = [];
  
 
  starship = new Starship(0, '', 0, '','', 1);
  card = new Starship(0, '', 0, '', '', 0);

  constructor(private http: SwServicesService) { }

  ngOnInit(): void {
  }

  addStarship(form: NgForm){
    console.log(this.starship);
  this.http.addStarship(this.starship)
  .subscribe(starship => {
    this.starships.push(starship);
  });
  form.reset();
  /*this.getCard(this.character);*/
  }
}
