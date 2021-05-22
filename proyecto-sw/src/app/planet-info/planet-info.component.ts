import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Planet } from '../planet/planet.model';
import { SwServicesService } from '../sw-services.service';

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.css']
})
export class PlanetInfoComponent implements OnInit {

  @Input() planetId : number;
  @Output() newItemEvent = new EventEmitter<string>();
  planetInfo: Planet;

  constructor(private http: SwServicesService) { }
//llamada a get character id
  ngOnInit(): void {
 
    this.http.getPlanet(this.planetId)
     .subscribe(planet => {this.planetInfo = planet,
     console.log(this.planetInfo)
     });

     
  }
  //El cerrar emite un valor gracias al decorador output y al html.
  close(value: string) {
    this.newItemEvent.emit(value);
  }
}
