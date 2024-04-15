import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() facultetAddedEvent: EventEmitter<Facultet> =
    new EventEmitter<Facultet>();

  constructor(
    private fb: FormBuilder,
    private facultyValidationService: ValidationService
  ) {
    this.facultetForm = fb.group({
      name: ['', [Validators.required]],
      deacanFullName: ['', [Validators.required]],
      phone: [
        '',
        [Validators.required, facultyValidationService.validatePhone],
      ],
      address: [
        '',
        [Validators.required, facultyValidationService.validateAddress],
      ],
      cafedres: this.fb.array([]),
    });
  }

  addCafedra() {
    console.log('Add');
    const cafedraGroup = this.fb.group({
      name: ['', Validators.required],
    });
    (this.facultetForm.get('cafedres') as FormArray).push(cafedraGroup);
  }

  deleteCafedra(i: any) {
    console.log('Delete');
    (this.facultetForm.get('cafedres') as FormArray).removeAt(i);
  }

  getControls() {
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
        this.facultetForm.value.cafedres.map((cafedra: any) => cafedra.name)
      );

      console.log(this.facultet);

      this.facultetAddedEvent.emit(this.facultet);

      this.facultetForm.reset();
    }
  }

  ngOnInit() {}
}
