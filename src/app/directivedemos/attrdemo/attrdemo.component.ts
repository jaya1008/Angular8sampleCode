import {Component, OnInit } from '@angular/core';
@Component({
    selector:'attr-demo',
    templateUrl:'attrdemo.component.html',
    styleUrls: ['attrdemo.component.css']
    })

export class DemoAttrComponents 
{
    svar:string="Style using ngStyle";
    color1:string='blue'
    color:string;
    size:number;
    displayText:string;
    visible:boolean;
    constructor()
    {
        this.color = 'pink';
        this.size = 28;
        this.displayText = 'show-class';
        this.visible = true;
    }
  
  
 }

