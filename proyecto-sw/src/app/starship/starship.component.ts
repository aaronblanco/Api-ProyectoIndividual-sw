import { Component, OnInit } from '@angular/core';
import { SwServicesService } from '../sw-services.service';
import { Starship } from './starship.model';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {
  name = 'app';

  starshipList: Starship[];
  
  constructor(private http: SwServicesService) { }
  ngOnInit() {
    this.getStarship();
  }

  getStarship(): void {
    this.http.getStarships()
    .subscribe(starship => this.starshipList = starship);
  }
}
