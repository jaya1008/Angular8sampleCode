import {  
    Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,  
    AfterViewChecked,  
    OnDestroy  
  } from '@angular/core';  
    
  @Component({  
    selector: 'lifecycle-parent',  
    templateUrl: './parentforlifecycle.component.html' 
  
  })  
  export class ParentLifecycle 
  implements OnInit, DoCheck, AfterContentInit, AfterContentChecked,  
    AfterViewInit,  
    AfterViewChecked,  
    OnDestroy {  
    
    title = 'app';  
    usertext: string = "";  
    
    ngOnInit() {  
      console.log('ngOnInit called');  
    }  
    ngDoCheck() {  
      console.log('ngDoCheck called');  
    }  
    ngAfterContentInit() {  
      console.log('ngAfterContentInit called');  
    }  
    ngAfterContentChecked() {  
      console.log('ngAfterContentChecked called');  
    }  
    ngAfterViewInit() {  
      console.log('ngAfterViewInit called');  
    }  
    ngAfterViewChecked() {  
      console.log('ngAfterViewChecked called');  
    }  
    ngOnDestroy() {  
      console.log('ngOnDestroy called');  
    }  
  }  