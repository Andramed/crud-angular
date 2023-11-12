import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  standalone: true, 
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule]

})
export class CustomInputComponent {
	@Input() controlerName!: FormControl;
	@Input() labelText!: string;
	@Input() placeHolder!: string;

	
}
