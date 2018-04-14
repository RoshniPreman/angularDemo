import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [ // list of components or directives belonging to this module
    AppComponent,
    HerosComponent,
    HeroDetailComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService, MessageService], // Providers array tells angular to create single instance of HeroService 
                            // and inject it into any class that asks for it
  bootstrap: [AppComponent] // Identify the rootcomponent that angular should bootstrap when it starts the application
})
export class AppModule { }
