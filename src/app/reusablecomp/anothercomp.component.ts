// anothercomp.component.ts
import { Component } from '@angular/core';
  
@Component({
  selector: 'app-another',
  templateUrl: './anothercomp.component.html',

})
export class AnotherComponent {
  title = 'AnotherComponent';
  posts = [
    {
      id: 1,
      title: 'Angular Http Post Request Example'
    },
    {
      id: 2,
      title: 'Angular 8 Routing and Nested Routing Tutorial With Example'
    },
    {
      id: 3,
      title: 'How to Create Custom Validators in Angular 8?'
    },
    {
      id: 4,
      title: 'How to Create New Component in Angular 8?'
    }
  ];
}