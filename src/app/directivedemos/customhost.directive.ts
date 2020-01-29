import { Directive, ElementRef, Renderer, HostListener, HostBinding, Host } 
from '@angular/core';

@Directive({
  selector: '[appCustomdemo]'
})
export class CustomdemoDirective {

  constructor(private element : ElementRef,
    private rendered : Renderer
      ) { }

  @HostBinding('style.backgroundColor')  bgColor : string;
  @HostBinding('style.border') borderColor : string;

  @HostListener('mouseenter') customMouseEnterEventHandler()
  {
    this.bgColor = "yellow";
    this.borderColor = "1px solid black";

  }

  @HostListener('mouseleave') customMouseLeaveEventHandler()
  {
    this.bgColor = "transparent";
    this.borderColor = "";
  }
}