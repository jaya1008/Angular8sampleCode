import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'barcode',
    pure: false
})
export class BarCodePipe implements PipeTransform {
    transform(value: string, args: any[]): string {
        console.log("in fn()")
        if (!value) {
            return '';
        }
        return "****-****_" + (value.length > 8 ? (value.length - 8): '')
    }
}
