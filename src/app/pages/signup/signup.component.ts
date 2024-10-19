import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './signup.component.html',
  styles: ``
})
export class SignupComponent {

  signupForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    addressLine1: new FormControl('', [Validators.required]),
    addressLine2: new FormControl(''),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('TX', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
    tdsp: new FormControl('CNP', [Validators.required]),
    tdspMeterId: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    if (this.signupForm.invalid) {
      return;
    }
  }

  get controls(): { [p: string]: AbstractControl } {
    return this.signupForm.controls;
  }


}
