import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Facultet } from './Facultet';

@Component({
  selector: 'app-my-university-form',
  templateUrl: './my-university-form.component.html',
  styleUrls: ['./my-university-form.component.scss'],
})
export class MyUniversityFromComponent  implements OnInit {
  facultetForm!: FormGroup;
  facultet!: Facultet;

  constructor(private fb: FormBuilder) {
    this.facultetForm = fb.group({
      name: ['', [Validators.required]],
      decanFullName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      cafedres: new FormArray([new FormControl()]),
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
    return (this.facultetForm.get('cafedres') as FormArray).controls;
  }

  onSubmit() {
    console.log('Submit');
  }

  ngOnInit() {}
}
