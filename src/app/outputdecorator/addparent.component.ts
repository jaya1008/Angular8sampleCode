import { Component } from '@angular/core';

@Component({
    selector: 'parent-add',
    templateUrl: './addparent.component.html',
})
export class AddsimpleComponent {
    msg: string = "";

    onNotify(message: string): void {
        this.msg +=  message;
    }
}


