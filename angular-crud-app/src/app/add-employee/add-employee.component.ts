import { Component } from '@angular/core';
import { AddFormComponent } from './add-form/add-form.component';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
  standalone: true,
  imports: [AddFormComponent]
})
export class AddEmployeeComponent {

}
