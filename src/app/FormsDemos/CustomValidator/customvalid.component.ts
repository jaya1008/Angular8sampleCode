import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl,Validators } from "@angular/forms";

@Component({
    selector:'custom-valid',
    templateUrl:'./customvalid.component.html'
})
export class CustomValidatorComp implements OnInit
{
    loginForm: FormGroup;
    subdata:any;
    ngOnInit(): void {
        this.loginForm = new FormGroup({
            email: new FormControl(null, [Validators.required]),
            password: new FormControl(null, [Validators.required, Validators.maxLength(8)]),
            age: new FormControl(null)
        });
        
    }
    save(formValue:any){
        this.subdata=formValue;
    }
}