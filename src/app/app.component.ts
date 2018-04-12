// ES6 destructuring
import { Component } from '@angular/core';


//  The CSS selector in the @Component decorator specifies an element named <app-root>. 
//  That element is a placeholder in the body of your index.html file:
//  When you bootstrap with the AppComponent class (in main.ts), Angular looks for a <app-root> in the 
//  index.html, finds it, instantiates an instance of AppComponent, and renders it inside the <app-root> tag.

@Component({      // @component is a decorator function that specifies angular metadata for the component
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heros';
  
}
