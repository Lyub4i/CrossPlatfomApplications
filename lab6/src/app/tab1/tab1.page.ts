import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  number1: number = 0;
  number2: number = 0;
  number3: number = 0;
  result: number | null = null;
  resultMessage: string = "";
  
  calculate() {
    if (
      this.number1 % 5 === 0 &&
      this.number2 % 5 === 0 &&
      this.number3 % 5 === 0
    ) {
      this.result = this.number1 + this.number2 + this.number3;
      this.resultMessage = 'Сума кратних 5: ' + this.result;
    } else {
      const sum = this.number1 + this.number2 + this.number3;
      this.result = sum * sum * sum;
      this.resultMessage = 'Куб суми: ' + this.result;
    }
  }
}
