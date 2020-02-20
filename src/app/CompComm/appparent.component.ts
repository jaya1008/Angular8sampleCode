import {Component } from '@angular/core';
import {AppChildComponent} from './appchild.component';

@Component({
    selector: 'myapp-parent',
    template: `<h1>Hello {{message}}</h1> <br/> 
  <appchild [greetMessage]="childmessage"></appchild> `,
})
export class MyAppParentComponent  { 
  
 message : string = "Hi this is message From Parent Component....!";
 childmessage : string = "This Value is passed from Parent to the child component"

 }