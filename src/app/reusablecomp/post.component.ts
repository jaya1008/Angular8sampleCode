import { Component, OnInit, Input } from '@angular/core';
  
@Component({
  selector: 'my-post',
  templateUrl: './post.component.html',

})
export class PostComponent{
  @Input() post;
}