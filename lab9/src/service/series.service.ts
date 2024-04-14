import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private xy = new Map();
  constructor(private logService: LogService) {}

  getSeries(x: number) {
    let sum = 1;
    let term = 1;
    let factorial = 1;
    let n = 1;

    while (term > Number.EPSILON) {
      factorial *= n;
      term = Math.pow(x, n) / factorial;
      sum += term;
      n++;
    }

    return sum;
  }

  getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.1) {
    let x = xn,
      y = 0.0;

    while (x <= xk) {
      y = this.getSeries(x);
      this.xy.set(x, y);
      if (this.logService) {
        this.logService.write('x=' + x.toFixed(2) + ' y=' + y.toFixed(4));
        x += h;
      }
    }

    return this.xy;
  }
}
