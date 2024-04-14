import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validatePhone(control: AbstractControl): ValidationErrors | null {
    const phonePattern = /^\+?\d{10,12}$/;
    return phonePattern.test(control.value) ? null : { invalidPhone: true };
  }

  validateAddress(control: AbstractControl): ValidationErrors | null {
    const addressPattern = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    return addressPattern.test(control.value) ? null : { invalidAddress: true };
  }
}
