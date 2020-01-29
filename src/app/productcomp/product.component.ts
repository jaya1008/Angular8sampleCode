import { Component } from '@angular/core';
import { Product } from './product';

@Component({
   selector:'product-comp',
   templateUrl:'./product.component.html' 
})
export class ProductComponent
{
    pobj:Product=new Product(101,'TV',34000,10,'Smart TV',0.1);
    
}