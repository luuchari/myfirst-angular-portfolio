import{RouterLink,RouterLinkActive,RouterOutlet}from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import { Component, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector:'app-root',
  standalone:true,
  imports:[RouterOutlet,HomeComponent,AboutComponent,PortfolioComponent,ContactsComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
})
export class AppComponent{
  title(title:any){
    throw new Error('method not implemented.');
  }
  ngOnChanges(changes : SimpleChanges){
    console.log(changes);
  }
}
