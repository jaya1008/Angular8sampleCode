import { Component } from "@angular/core";
import { Observable, Observer, Subscription } from "rxjs";


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
