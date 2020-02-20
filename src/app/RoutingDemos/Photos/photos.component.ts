import { Component } from '@angular/core';

@Component({
    template: `<h1>{{messageTitle}}</h1>`

})
export class PhotosComponent {
    messageTitle: string = "This is Photos page ......!!!!!";
}