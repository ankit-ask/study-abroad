import { Injectable } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  public markFormAsTouched(form: FormGroup | FormArray) {
    (<any>Object)
      .values(form.controls)
      .forEach((control: FormGroup | FormArray) => {
        if (control.controls) {
          // control is a FormGroup or FormArray
          control.markAsTouched({ onlySelf: true });
          control.updateValueAndValidity();
          this.markFormAsTouched(control);
        } else {
          // control is a FormControl
          control.markAsTouched({ onlySelf: true });
          control.updateValueAndValidity();
        }
      });
  }

  public markFormAsDirty(form: FormGroup | FormArray) {
    (<any>Object)
      .values(form.controls)
      .forEach((control: FormGroup | FormArray) => {
        if (control.controls) {
          // control is a FormGroup or FormArray
          control.markAsDirty();
          control.markAsTouched({ onlySelf: true });
          control.updateValueAndValidity();
          this.markFormAsDirty(control);
        } else {
          // control is a FormControl
          control.markAsDirty();
          control.markAsTouched({ onlySelf: true });
          control.updateValueAndValidity();
        }
      });
  }

  static MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // console.log('hi',matchingControl.value,control.value);
      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
