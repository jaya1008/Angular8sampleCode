 export class Employee {
     empCode:number;
     empName:string;
     salary:number;
    constructor(public empcode:number,
        public empname:string,
        public Salary:number)
         {
        this.empCode=empcode;
        this.empName=empname;
        this.salary=Salary;
    }
}