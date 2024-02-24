import { Component, ViewChild, ElementRef } from '@angular/core';
import { Plane, Ship, Vehicle } from './class/classes';

@Component({
  selector: 'app-abstractClass',
  templateUrl: 'abstractClass.page.html',
  styleUrls: ['abstractClass.page.scss'],
})
export class AbstractClassPage {
  vehicles: Vehicle[] = [];
  inputField = 0;
  serPlanes = 0;
  serShips = 0;

  constructor() {}

  ras() {
    this.vehicles = new Array();

    let n = this.inputField;

    for (let i = 0; i < n; i++) {
      this.vehicles.push(new Plane('Plane ' + i, 3 + i, 15 + i));
      this.vehicles.push(new Ship('Ship ' + i, 3 + i, 'Port ' + i));
    }

    this.serPlanes = 0;
    this.serShips = 0;
    this.vehicles.forEach((element) => {
      if (element.name.includes('Plane')) {
        this.serPlanes += element.getCost();
      } else {
        this.serShips += element.getCost();
      }
    });

    this.serPlanes = this.serPlanes / n;
    this.serShips = this.serShips / n;
  }
}
