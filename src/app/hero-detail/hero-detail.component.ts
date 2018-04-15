import { Component, OnInit , Input } from '@angular/core';
import  Hero from '../hero'; // default exported class without curly brace with alias name
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
      private route : ActivatedRoute, // holds information about the route
      private location : Location, // Angular service for interacting with the browser. To navigate back to the view that navigated here.
      private heroService : HeroService
  ) { }

  ngOnInit() {
    this.getHero();
  }

  hero : Hero;
   getHero() : void{
     debugger;
      const id = +this.route.snapshot.paramMap.get('id');
      // Route parameters are always strings. The JavaScript (+) operator converts the string to a number
      this.heroService.getHero(id)
            .subscribe(hero => this.hero = hero);
   } 
}
