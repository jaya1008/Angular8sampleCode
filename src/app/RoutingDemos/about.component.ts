import { Component } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';

@Component({
 // selector: 'app-about',
  template: `
    <h2 style=color:Blue>About Menu from Main menu selected </h2>
    <a style=color:Red [routerLink]="['/about']">About-Home</a>
    <a style=color:Green [routerLink]="['/about/item', 'LED-TV']">Television Sets</a>
   <a style=color:Orange [routerLink]="['/about/item', 'Godrej-Fridge']">
   Refrigerators</a>
    <div class="inner-outlet">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AboutComponent { }
