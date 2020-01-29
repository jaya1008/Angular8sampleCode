import { Component } from '@angular/core';

@Component({
    selector:'log-app',
    templateUrl:'./Login.component.html'
})
export class LoginComponent{
    username:string="";
    password:string="";
    msg:string=""
    validate():void{
        if(this.username==='jayshree' && this.password==='jayshree@123')
            this.msg="Valid User";
        else
            this.msg="Invalid User";
    }
}