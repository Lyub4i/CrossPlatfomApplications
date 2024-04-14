import { TestBed } from '@angular/core/testing';

import { ValidationService } from './validation.service';
import { AbstractControl, FormControl } from '@angular/forms';

describe('ValidationService', () => {
  let service: ValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validate phone number', () => {
    const control = new FormControl('1234567890');
    const result = service.validatePhone(control as AbstractControl);
    expect(result).toBeNull();

    control.setValue('123');
    const invalidResult = service.validatePhone(control as AbstractControl);
    expect(invalidResult).toEqual({ invalidPhone: true });
  });

  it('should validate address', () => {
    const control = new FormControl('Some Street, 123');
    const result = service.validateAddress(control as AbstractControl);
    expect(result).toBeNull();

    control.setValue('a');
    const invalidResult = service.validateAddress(control as AbstractControl);
    expect(invalidResult).toEqual({ invalidAddress: true });
  });
});
