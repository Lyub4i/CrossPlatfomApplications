import { Component, OnInit } from '@angular/core';
import { Facultet } from 'src/app/faculty-form/Facultet';

@Component({
  selector: 'app-university',
  templateUrl: './university.page.html',
  styleUrls: ['./university.page.scss'],
})
export class UniversityPage implements OnInit {
  facultet!: any;

  isEditing = false;

  constructor() {}

  onFacultetAdded(newFacultet: Facultet) {
    this.facultet = newFacultet;
    this.isEditing = true;
  }

  onFacultetUpdated(updatedFacultet: Facultet) {
    this.facultet = updatedFacultet;
  }

  onBackToForm() {
    this.isEditing = false;
    this.facultet = null;
  }
  ngOnInit() {
  }

}
