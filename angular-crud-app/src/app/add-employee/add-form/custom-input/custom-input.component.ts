import {Component, Input, ViewEncapsulation} from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  AbstractControl,
  FormGroup,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgIf } from '@angular/common';

export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
	  const isSubmitted = form && form.submitted;
	  return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
  }
  function nameValidator(control: AbstractControl) {
	const value = control.value;
	const isValid = /^[a-zA-Z\s]*$/.test(value);
	return isValid ? null : { 'name': { value } };
  }
@Component({
	selector: 'input-custom',
	templateUrl: './custom-input.component.html',
	styleUrls: ['./custom-input.component.scss'],
	standalone: true,
	imports: [NgIf, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
	
})
export class CustomInputComponent {
	emailFormControl = new FormControl('', [Validators.required, Validators.email ]);
	stringControl = new FormControl('', [Validators.required, nameValidator]);
	matcher = new MyErrorStateMatcher();
	activeControl!: FormControl;
	@Input() placeholder!: string;
	@Input() inputType!: string;
	@Input() errorMessage!: string;
	@Input() inputLabel!: string;
	@Input() formGroup!: FormGroup;

	ngOnInit() {
		this.activeControl = this.inputType === 'email' ? this.emailFormControl : this.stringControl;
	}
}
