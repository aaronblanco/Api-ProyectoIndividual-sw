import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet/planet.model';
import { SwServicesService } from '../sw-services.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

  name = 'app';
  mostrar = false;
  // characterListSub: Subscription;
   planetList: Planet[] = [];
   id: string
   

   constructor(private http: SwServicesService) { }
 

 
   ngOnInit() {
     this.getPlanets();
    
    
    }
    //Si ha saltado close es debido al output.
    close(value: string) {
     this.mostrar = false;
     }

    mostrarInfo(id): void{
      this.id = id;
      this.mostrar = true;

    }


    getPlanets(): void {
     this.http.getPlanets().subscribe(planets => {this.planetList = planets
       console.log(planets);
     
     });
   }
}
