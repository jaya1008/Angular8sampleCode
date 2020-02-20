import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'com-parent',
  template: `
    Message: {{ message }}
    <com-child></com-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  @ViewChild(ChildComponent,{static:true}) child;
 /*
 Metadata Properties:

selector - The directive type or the name used for querying.
read - True to read a different token from the queried elements.
static - True to resolve query results before change detection runs, false to resolve after change detection. Defaults to false.
 */
  constructor() { }

  message:string;

  ngAfterViewInit() {
    this.message = this.child.message
  }
}