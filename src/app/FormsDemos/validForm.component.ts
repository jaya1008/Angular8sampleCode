import { Component } from '@angular/core';

@Component({
    selector: 'app-validform',
    templateUrl: 'validForm.component.html'
})
export class ValidFormComponent {

    value: any;

    log(contactForm) {
        this.value = contactForm;
        console.log(contactForm);
    }
}