import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'discal'
})
export class CalculateDis implements PipeTransform
{
     transform(value:number,discount:number):number{

        var value=value-((value*discount)/100);
        return value;
     }

}