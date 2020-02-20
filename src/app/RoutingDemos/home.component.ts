import { Component } from '@angular/core';

@Component({
    template: `<h1>{{message}}</h1>`
})
export class HomeComponent {
    message: string = "Welcome to Home page...!!!"
}