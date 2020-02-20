import { Component } from '@angular/core';

@Component({
    template: `<h1>{{messageTitle}}</h1>`

})
export class MessagesComponent {
    messageTitle: string = "This is Message page ......!!!!!";
}