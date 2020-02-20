import { Component } from '@angular/core';
@Component({
    selector:'stud-comp',
    templateUrl:'./student.component.html'
})
export class StudentComponent
{
    title="Stuent Form";
    rollno:number;
    name:string;
    m1:number;
    m2:number;
    m3:number;
    tot:number;
    per:number;
    grade:string
    calculateResult():void{
        console.log(this.rollno)
        console.log(this.name);
        console.log(this.m1);
        console.log(this.m2);
        console.log(this.m3)

        this.tot=this.m1+this.m2+this.m3;
        console.log(this.tot);
        this.per=this.tot/300*100;
        console.log(this.per)

    }
}
