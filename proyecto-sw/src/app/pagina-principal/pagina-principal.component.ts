import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {


  constructor(  private router: Router ) { }

  ngOnInit(): void {
  }

  navigateCharacter(){
    this.router.navigate(['/character']);
  }
  navigateStarship(){
    this.router.navigate(['/starship']);
  }
  navigatePlanets(){
    this.router.navigate(['/planets']);
  }
}
