import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Facultet } from './Facultet';
import { ValidationService } from 'src/service/validation.service';

@Component({
  selector: 'app-faculty-form',
  templateUrl: './faculty-form.component.html',
  styleUrls: ['./faculty-form.component.scss'],
})
export class FacultyFormComponent implements OnInit {
  facultetForm!: FormGroup;
  facultet!: Facultet;

  constructor(
    private fb: FormBuilder,
    private facultyValidationService: ValidationService
  ) {
    this.facultetForm = fb.group({
      name: ['', [Validators.required]],
      decanFullName: ['', [Validators.required]],
      phone: [
        '',
        [Validators.required, facultyValidationService.validatePhone],
      ],
      address: [
        '',
        [Validators.required, facultyValidationService.validateAddress],
      ],
      cafedres: this.fb.array([new FormControl()]),
    });
  }

  addCafedra() {
    console.log('Add');
    (this.facultetForm.controls['cafedres'] as FormArray).push(
      new FormControl()
    );
  }

  deleteCafedra(i: any) {
    console.log('Delete');
    (this.facultetForm.controls['cafedres'] as FormArray).removeAt(i);
  }

  getControls() {
    console.log('getControls');
    return (this.facultetForm.get('cafedres') as FormArray).controls;
  }

  onSubmit() {
    if (this.facultetForm.valid) {
      console.log('Submit');
      this.facultet = new Facultet(
        this.facultetForm.value.name,
        this.facultetForm.value.deacanFullName,
        this.facultetForm.value.phone,
        this.facultetForm.value.address,
        this.facultetForm.value.cafedres
      );
  
      console.log(this.facultet); 
    }
  }

  ngOnInit() {}
}
