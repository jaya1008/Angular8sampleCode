import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'contact-first',
  templateUrl: './contact.component.html',

})
export class ConatctFormComponent {

  value: any;
  contact: Contact = {
    firstname: "Ganesha",
    lastname: "Omkara",
    city: "heavens", street: "Ganesh Nagar", pincode: "400050"
  };

  logForm(fvalue: any) {
    this.value = fvalue;
    console.log(fvalue);
  }
}
