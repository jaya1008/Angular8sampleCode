import { Component } from "@angular/core";
import { Observable, Observer, Subscription, of} from "rxjs";
import { filter, map } from 'rxjs/operators';

@Component({
    selector:'observableDemo-app',
    template:`<h1>Check output on console</h1>`
})
export class ObservableDemo
{
    observable: Observable<string>;
    observer:Observer<string>;
  
    subscription: Subscription;
    
  ngOnInit() {
    this.observable = new Observable((observer: Observer<string>) => {
      this.observer = observer;
    });
    this.observable
      .subscribe(this.handleData, this.handleError , this.handleComplete);

    this.observer.next('12');
    this.observer.next('15');

    this.observer.next('16');
    this.observer.complete();

    //RxJs operarator

    const squareOf2 = of(1, 2, 3, 4, 5,6)
  .pipe(
    filter(num => num % 2 === 0),
    map(num => num * num)
  );
   squareOf2.subscribe( (num) => console.log(num));
  }

    handleData(data) {
        console.log('Here are the usable data', data);
        // Insert Business logic here
      }

      handleComplete() {
        console.log('Complete');
      }

      handleError(error) {
        console.log('error:', error)
        return Observable.throw(error);
      }



}
