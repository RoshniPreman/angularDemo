import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'Rxjs/Observable/of';
import { MessageService } from './message.service';

import  Hero , { Heroes }  from './hero'; // default exported class without curly brace with alias name

@Injectable()
export class HeroService {

  constructor(private messageService : MessageService) { }

  getHeros() : Observable<Hero[]> {
    this.messageService.add("Fetched Heroes");
      return of(Heroes);
  }

}
