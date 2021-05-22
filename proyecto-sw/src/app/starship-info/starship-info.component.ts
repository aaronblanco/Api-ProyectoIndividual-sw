import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Starship } from '../starship/starship.model';
import { SwServicesService } from '../sw-services.service';

@Component({
  selector: 'app-starship-info',
  templateUrl: './starship-info.component.html',
  styleUrls: ['./starship-info.component.css']
})
export class StarshipInfoComponent implements OnInit {
  @Input() starshipId : number;
  @Output() newItemEvent = new EventEmitter<string>();
  starshipInfo: Starship;

  constructor(private http: SwServicesService) { }
//llamada a get character id
  ngOnInit(): void {
 
    this.http.getStarship(this.starshipId)
     .subscribe(starship => {this.starshipInfo = starship,
     console.log(this.starshipInfo)
     });

     
  }
  //El cerrar emite un valor gracias al decorador output y al html.
  close(value: string) {
    this.newItemEvent.emit(value);
  }
  
}
