import { Component, OnInit } from '@angular/core';
import  Hero , { Heroes }  from '../hero'; // default exported class without curly brace with alias name


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  heroes = Heroes;
  selectedHero : Hero;

  selectHero(hero : Hero) : void{
      this.selectedHero = hero;
  }
}
