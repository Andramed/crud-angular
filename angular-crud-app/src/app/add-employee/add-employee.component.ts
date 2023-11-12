
import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
  standalone: true,
  imports: [FormComponent]
})
export class AddEmployeeComponent {
	
}
