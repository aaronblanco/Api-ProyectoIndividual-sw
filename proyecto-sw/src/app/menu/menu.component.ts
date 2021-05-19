import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private router: Router) { }

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
