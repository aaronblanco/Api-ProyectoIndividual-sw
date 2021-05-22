import { Component, OnInit } from '@angular/core';
import { Starship } from '../starship/starship.model';
import { SwServicesService } from '../sw-services.service';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {

  name = 'app';
  mostrar = false;
  // characterListSub: Subscription;
   starshipList: Starship[] = [];
   id: string
   

   constructor(private http: SwServicesService) { }
 

 
   ngOnInit() {
     this.getStarships();
    
    
    }
    //Si ha saltado close es debido al output.
    close(value: string) {
     this.mostrar = false;
     }

    mostrarInfo(id): void{
      this.id = id;
      this.mostrar = true;

    }


    getStarships(): void {
     this.http.getStarships()
     .subscribe(starships => {this.starshipList = starships
       console.log(starships);
     
     });
   }

}
