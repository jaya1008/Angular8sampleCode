import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'add-child',
    templateUrl: './addchild.component.html',
    styleUrls: [ ]
})
export class AddChildComponent {
    @Output() add: EventEmitter<number> = new EventEmitter<number>();

    onClick(no1:string, no2:string): void {

        this.add.emit(parseInt(no1)+parseInt(no2));
    }
}
