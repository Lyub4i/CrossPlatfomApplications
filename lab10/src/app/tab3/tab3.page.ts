import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  matrixSize: number = 3;
  matrix: number[][] = [];
  diagonalSum: number = 0;

  constructor() {}

  generateMatrix() {
    this.matrix = [];

    let cellNumber = 1;
    for (let i = 0; i < this.matrixSize; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < this.matrixSize; j++) {
        this.matrix[i][j] = cellNumber;
        cellNumber++;
      }
    }

    this.diagonalSum = 0;
    for (let i = 0; i < this.matrixSize; i++) {
      this.diagonalSum += this.matrix[i][i];
    }
  }
}
