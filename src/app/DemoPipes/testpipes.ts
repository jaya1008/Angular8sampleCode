import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './testpipes.component.html'
 
})
export class TestPipes {
  thetitle = 'pipes demo';
 xyz:string="Seven Mentor";
  jd = new Date(2002,3, 15);
  a: number = 0.259;
  b: number = 12.3495;
  num1: number = 0.20;
  num2: number = 0.10;

  course:any={code: 'C101', name: 'Professional Azure', Fees: '24000',
 technology:'Cloud'};
  bookObj=new Book("Abc",1234);
}

export class Book
{
  bkname:string;
  price:number;
 constructor(public bkName:string,public Price:number)
 {
   this.bkname=bkName;
   this.price=Price;
 }
}