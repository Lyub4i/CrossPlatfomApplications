import { Component, OnInit } from '@angular/core';
import { Facultet } from 'src/app/faculty-form/Facultet';

@Component({
  selector: 'app-university',
  templateUrl: './university.page.html',
  styleUrls: ['./university.page.scss'],
})
export class UniversityPage implements OnInit {
  facultet!: any;
  facultets: Facultet[] = [];

  constructor() {}

  onFacultetAdded(newFacultet: Facultet) {
    this.facultets.push(newFacultet);
  }

  onFacultetUpdated(updatedFacultet: Facultet) {
    this.facultet = updatedFacultet;
  }
  ngOnInit() {}
}
