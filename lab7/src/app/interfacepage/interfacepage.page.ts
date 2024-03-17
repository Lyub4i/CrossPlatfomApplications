import { Component, ViewChild, ElementRef } from '@angular/core';
import { Engineer } from './classes/Engineer';

@Component({
  selector: 'app-interfacepage',
  templateUrl: 'interfacepage.page.html',
  styleUrls: ['interfacepage.page.scss'],
})
export class InterfacepageClassPage {
  name: string = '';
  age: number = 0;
  department: string = '';
  specialization: string = '';
  engineer: Engineer = new Engineer("", 0, "", "");
  engineerWork: string = "";
  engineerManage: string = "";
  engineerIntroduction: string = "";

  constructor() {}

  createEngineer() {
    this.engineer = new Engineer(
      this.name,
      this.age,
      this.department,
      this.specialization
    );
    
    this.engineer.introduceYourself();
    this.engineer.doWork();
    this.engineer.manage();
  }
}
