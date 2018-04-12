import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';


@NgModule({
  declarations: [ // list of components or directives belonging to this module
    AppComponent,
    HerosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Identify the rootcomponent that angular should bootstrap when it starts the application
})
export class AppModule { }
