import { Component, OnInit } from '@angular/core';
import { SwServicesService } from '../sw-services.service';
import { Planet } from './planet.model';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  name = 'app';

  planetList: Planet[];
  
  constructor(private http: SwServicesService) { }
  ngOnInit() {
    this.getPlanets();
  }

  getPlanets(): void {
    this.http.getPlanets()
    .subscribe(planets => this.planetList = planets);
  }

}
