import {Component} from '@angular/core';
@Component({
    selector: 'prop-element',
    templateUrl: './databinding.component.html', 
    styleUrls: ['./databinding.component.css']
})
export class DemoBindingsComponent {
	title="DataBinding Demos";
    flag:boolean= true;
	website = {
	     name : 'TechnoSolutions',
	     url : 'http://www.TechnoloSolutions.com',
	     logo : 'favicon.ico',
	     description: 'This is description of the site'
	};
} 