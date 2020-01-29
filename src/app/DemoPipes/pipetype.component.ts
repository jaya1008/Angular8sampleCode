import { Component } from "@angular/core";

@Component({
    selector: 'pipe-app',
    template: `<p>SUM of {{fib | json}} = {{fib | applyPure: sum}}</p>`
  })
  export class PipeComponent  {
  fib = [1, 2, 3, 5, 8];
  public sum(collection: [number]): number {
      return collection.reduce((first, second) => first + second);
    }
    
  }