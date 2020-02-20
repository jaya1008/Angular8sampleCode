import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'  
  
@Component({  
    selector: 'child-lifecycle',  
    template: ` {{changedata}}`  
  
})  
  
export class ChildforLifeCycle implements OnChanges {  
    @Input() changedata: string;  
  
    ngOnChanges(changes: SimpleChanges) {  
        
        for (let name_prop in changes) {  
            let change = changes[name_prop];  
            let current_value = JSON.stringify(change.currentValue);  
            let previous_value = JSON.stringify(change.previousValue);  
            console.log("ngOnChange is called");  
            console.log("Current value is:" + current_value);  
            console.log("Previous value is:" + previous_value);  
        }  
    }  
  
}  