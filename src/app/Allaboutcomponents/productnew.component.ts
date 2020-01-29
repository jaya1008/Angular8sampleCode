import { Component } from '@angular/core';

@Component({
    selector:'product1-comp',
    templateUrl:'./productnew.component.html',
    styleUrls:['./productnew.component.css']
})
export class ProductComponentNew 
{
    title:string="My Product comp";
    product:any={
        pid:101,
        pname:"Smart TV",
        price:56000,
        description:"Android version x"
    }
}