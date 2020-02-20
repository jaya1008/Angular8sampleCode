import { Component } from '@angular/core';

@Component({
  selector: 'demotwo-way',
  templateUrl: './twoway.component.html'
 })
export class DemoTwoWayComponent {
  hiMessage1:string="Hi There";
   hiMessage2:string="Ola Senorita!!!!!!!";
  Thetitle:string = 'Techno Solutions Ltd';
  msg:string;
  showMsg():void{
    this.msg="Hello All ...."
  }
 }