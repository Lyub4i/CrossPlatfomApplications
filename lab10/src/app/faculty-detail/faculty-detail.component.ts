import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Facultet } from '../faculty-form/Facultet';
import { ValidationService } from 'src/service/validation.service';

@Component({
  selector: 'app-faculty-detail',
  templateUrl: './faculty-detail.component.html',
  styleUrls: ['./faculty-detail.component.scss'],
})
export class FacultyDetailComponent implements OnInit {
  @Input() facultet!: Facultet;
  @Output() facultetUpdatedEvent: EventEmitter<Facultet> =
    new EventEmitter<Facultet>();
  facultetForm!: FormGroup;
  validation!: ValidationService;

  constructor(private fb: FormBuilder, private validator: ValidationService) {
    this.validation = validator;
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.facultetForm = this.fb.group({
      name: [this.facultet.name, Validators.required],
      deacanFullName: [this.facultet.deacanFullName, Validators.required],
      phone: [
        this.facultet.phone,
        [Validators.required, this.validation.validatePhone],
      ],
      address: [
        this.facultet.address,
        [Validators.required, this.validation.validateAddress],
      ],
      cafedres: this.fb.array(this.initCafedres()),
    });
  }

  initCafedres() {
    const cafedresArray: any[] = [];
    if (this.facultet.cafedres) {
      this.facultet.cafedres.forEach((cafedra: any) => {
        cafedresArray.push(
          this.fb.group({
            name: [cafedra, Validators.required],
          })
        );
      });
    }
    return cafedresArray;
  }

  get cafedresControls() {
    return (this.facultetForm.get('cafedres') as FormArray).controls;
  }

  addCafedra() {
    const cafedraControl = this.fb.group({
      name: ['', Validators.required],
    });
    (this.facultetForm.get('cafedres') as FormArray).push(cafedraControl);
  }

  deleteCafedra(index: number) {
    (this.facultetForm.get('cafedres') as FormArray).removeAt(index);
  }

  onSubmit() {
    if (this.facultetForm.valid) {
      const updatedFacultet = new Facultet(
        this.facultetForm.value.name,
        this.facultetForm.value.deacanFullName,
        this.facultetForm.value.phone,
        this.facultetForm.value.address,
        this.facultetForm.value.cafedres.map(
          (cafedra: { name: any }) => cafedra.name
        )
      );
      this.facultetUpdatedEvent.emit(updatedFacultet);
    }
  }
}
