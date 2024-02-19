import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  a: number = 0;
  b: number = 0;
  product: number = 1;

  constructor() {}

  calculateProduct() {
    this.product = 1;
    if (this.a < this.b) {
      for (let i = this.a; i <= this.b; i++) {
        if (i % 7 === 0 && i < 30) {
          this.product *= i;
          console.log(this.product);
        }
      }
    } else {
      alert("Помилка: a має бути меншим за b");
    }
  }
}