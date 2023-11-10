import {Component} from '@angular/core';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
  standalone: true,
  imports: [CustomInputComponent]
})
export class AddFormComponent {
	formGroup = new FormGroup ({
		myControl: new FormControl('')
	})
}
