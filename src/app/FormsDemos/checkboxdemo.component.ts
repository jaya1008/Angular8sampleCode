import { Component } from "@angular/core";

@Component({

    selector:'demo-check',
    templateUrl:'./checkboxdemo.component.html'
})
export class DemoCheckBox
{

    xyzlist:any;//Just created a list
    total: number;
    constructor()
    {
        this.xyzlist = [
            {
              id: 1,
              value: 3000,
              checked:false
            },
            {
              id: 2,
              value: 5000,
              checked:false
            }
          ];
    }
    onClicked(option, event)
     {
        console.log("event  " + this.xyzlist.length);
        
        for (var i = 0; i < this.xyzlist.length; i++)
         {
           
            if (this.xyzlist[i].id == event.target.value)
             {
                
                this.xyzlist[i].checked = event.target.checked;
            }
            console.log("after update of checkbox" + this.xyzlist[i].checked);
    
        }
      
    }
    onSubmit(){
        var sum=0;
        for (var i = 0; i < this.xyzlist.length; i++)
        {
            if (this.xyzlist[i].checked)
            {
                sum=sum+this.xyzlist[i].value;
            }

        }  
        this.total=sum;   
    }
}