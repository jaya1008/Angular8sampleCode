import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'person',
    templateUrl: './person.component.html',
    styles: [`
 input.ng-invalid{border-left:5px color:red;}
 input.ng-valid{border-left:5px color:green;}
 `]
})


export class PersonComponent {

    contactForm = new FormGroup({
        firstname: new FormControl('', Validators.compose(
            [Validators.required,
        Validators.minLength(4), Validators.maxLength(6)])),
        lastname: new FormControl('', Validators.compose([Validators.required,
        Validators.minLength(3)])),
        address: new FormGroup({
            city: new FormControl(),
            street: new FormControl('east street'),
            pincode: new FormControl('', Validators.pattern('^[0-9]{5}$'))
        })
    })

    onSubmit() {
        console.log(this.contactForm.value);
    }
}

