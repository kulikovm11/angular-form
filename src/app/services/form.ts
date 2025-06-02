import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  initForm(): FormGroup {
    const PATTERN = /^[a-zA-Z0-9\s]*$/;
    return new FormGroup({
      firstname: new FormControl(null, [Validators.pattern(PATTERN), Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      lastname: new FormControl(null, [Validators.pattern(PATTERN), Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      streetAddress: new FormControl(null, [Validators.pattern(/^[a-zA-Z0-9 .,#/-]*$/), Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      streetAddressLine: new FormControl(null, [Validators.pattern(/^[a-zA-Z0-9 .,#/-]*$/), Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      city: new FormControl(null, [Validators.pattern(PATTERN), Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      state: new FormControl(null, [Validators.pattern(PATTERN), Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      zipCode: new FormControl(null, [Validators.pattern(/^\d*$/), Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      phoneNumber: new FormControl(null, [Validators.pattern(/^\+?[0-9\s\-()]*$/), Validators.required, Validators.minLength(9), Validators.maxLength(20)]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(50)]),
    });
  }

  saveForm(form: FormGroup): void {
    if (form.valid) {
      console.log(form.getRawValue());
      form.reset();
    } else {
      console.error('Form is invalid');
      Object.keys(form.controls).forEach(field => {
        const control = form.get(field);
        if (control?.errors) {
          console.log(`${field} errors:`, control.errors);
        }
      });
    }
  }
}
