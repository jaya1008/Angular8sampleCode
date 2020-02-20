import { Component, Input } from '@angular/core';

@Component({
    selector :'login-comp',
    templateUrl:'./Login.component.html'
})
export class LoginComponent
{
  title:string ="Login Here"
  @Input() user={ username:'',password:''};
  // username:string;
  // password:string;
  msg:string;
  
  validate():void{
      console.log(this.user.username);
      console.log(this.user.password);
      console.log("btn clicked");
      if(this.user.username==='jayshree' && this.user.password==='Jayshree@123')
        this.msg="Welcome User !!!"
      else
        this.msg=" Invalid User"
  }
}