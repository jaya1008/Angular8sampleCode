import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl,Validators } from "@angular/forms";
import { UsernameValidator } from './username.validator';

@Component({
    selector:'custom-valid',
    templateUrl:'./customvalid.component.html'
})
export class CustomValidatorComp implements OnInit
{
    loginForm: FormGroup;
    subdata:any;
    validations_form: FormGroup;
    formBuilder: any;
    ngOnInit(): void {
        this.validations_form = new FormGroup({
            username: new FormControl('', Validators.compose([
                  UsernameValidator.validUsername,
                  Validators.maxLength(25),
                  Validators.minLength(5),
                  Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
                  Validators.required
              ])),
          })
        
    }
    onSubmit(formValue:any){
        console.log("in check");
        this.subdata=formValue;
    }
    username_validation_messages = {
        'username': [
          { type: 'required', message: 'Username is required' },
          { type: 'minlength', message: 'Username must be at least 5 characters long' },
          { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
          { type: 'pattern', message: 'Your username must contain only numbers and letters' },
          { type: 'validUsername', message: 'Your username has already been taken' }
        ]

    }
}