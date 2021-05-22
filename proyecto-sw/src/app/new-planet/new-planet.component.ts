import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Planet } from '../planet/planet.model';
import { SwServicesService } from '../sw-services.service';

@Component({
  selector: 'app-new-planet',
  templateUrl: './new-planet.component.html',
  styleUrls: ['./new-planet.component.css']
})
export class NewPlanetComponent implements OnInit {
  planets: Planet[];
  planetList: Planet[] = [];
  
  //planet = []
  planet = new Planet(0,'', 0, 0, '', '' );
  //card = new Character(0, '', 0, '', '', '', '', this.starship);

  constructor(private http: SwServicesService) { }

  ngOnInit(): void {
  }
  addPlanet(form: NgForm){
    console.log(this.planet);
  this.http.addPlanet(this.planet)
  .subscribe(planet => {
    this.planets.push(planet);
  });
  form.reset();
  /*this.getCard(this.character);*/
  }
}
