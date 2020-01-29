import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
//model driven forms
@Component({
    selector: 'm-contact',
    templateUrl: './modelcontact.component.html',

})
export class ModelContactComponent implements OnInit {
    title = 'app works!';
    registerForm: any;
    submitted: boolean;
    ngOnInit() {
        this.registerForm = new FormGroup
        ({
            first_name: new FormControl("Lionel"),
            last_name: new FormControl("Messi"),
            phone: new FormControl("12345"),
            email: new FormControl("linoel@gmail.com"),
            address: new FormGroup
            ({
                street: new FormControl("Some street"),
                zip: new FormControl("12345"),
                city: new FormControl("A")
            })
        });
    } 

    save(fvalue) {
        //this.submitted = true;
        console.log(fvalue);
    }
}

