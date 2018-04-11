import { Component, OnInit } from '@angular/core';
import  Hero  from '../hero'; // default exported class without curly brace with alias name


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hero : Hero =  {
    id : 1,
    name : 'Windstorm'
  }

}
