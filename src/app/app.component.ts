import { Component } from '@angular/core';



@Component({      // @component is a decorator function that specifies angular metadata for the component
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heros';
  
}
