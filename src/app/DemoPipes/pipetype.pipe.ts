import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applyPure',
  pure: true // immutable (value) inputs & pure fn (function)
})
export class ApplyPurePipe implements PipeTransform {

  transform(value: any, fn: Function): any {
    return fn(value);
  }
}

@Pipe({
  name: 'apply',
  pure: false // any (value) inputs & any fn (function)
})
export class ApplyPipe implements PipeTransform {

  transform(value: any, fn: Function): any {
    return fn(value);
  }

}