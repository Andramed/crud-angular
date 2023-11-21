import { Component } from '@angular/core';
import { FormGroup,  FormControl, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
// addded for ui
// FormsModule
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { DataService } from 'src/app/service/data.service';
import { Data } from 'src/app/interface/data';

@Component({
  selector: 'form-add',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [CustomInputComponent, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule]
	// added in imports; FormsModule, MatFormFieldModule, MatInputModule

})
export class FormComponent {

	data!: Data;

	employeeForm = new FormGroup ({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
		email: new FormControl('')
	})
	
	constructor(private data_service: DataService) {}

	onSubmit() {
		console.log('try to connect to server');
		this.data_service.postNewEmployee(this.employeeForm.value).subscribe({
			next: (res) => {
				console.log(res);	
			}
		})
	}

}
