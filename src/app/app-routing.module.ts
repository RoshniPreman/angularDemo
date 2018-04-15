import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// Routes tell the router which view to display when a user clicks a link 
// or pastes a URL into the browser address bar
// Route has mainly two properties . path and component.

const routes : Routes = [
  {path : '' , redirectTo : "/dashboard" , pathMatch: 'full' }, // default route. redirectto and component cant be used together
  { path: 'dashboard', component: DashboardComponent },
  {path : 'heroes' , component : HerosComponent },
  {path : 'detail/:id' , component : HeroDetailComponent} //The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    // forRouter method supplies the service providers and directives needed for routing
    // and performs the initial navigation based on current browser url.
  ],
  exports :[
    RouterModule
  ]
})
export class AppRoutingModule { }
