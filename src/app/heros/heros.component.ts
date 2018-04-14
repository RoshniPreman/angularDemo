import { Component, OnInit } from '@angular/core';
import Hero from '../hero'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor(private heroService : HeroService) { } // Reserve constructor for simple initialization and call functions inside ngOnInit

  ngOnInit() {
    this.getHeroes();
  }

  heroes : Hero[];

  getHeroes() : void{
      // this.heroes = this.heroService.getHeros(); // without observable

      this.heroService.getHeros().
              subscribe( heroes => this.heroes = heroes );
  }
  selectedHero : Hero;

  selectHero(hero : Hero) : void{
      this.selectedHero = hero;
  }
}
