import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class RecursionServiceService {
  private xy = new Map();
  constructor(private logService: LogService) {}

  getSeries(x: number, n: number = 1, sum: number = 1, factorial: number = 1): number {
    const term = Math.pow(x, n) / factorial;

    if (term < Number.EPSILON) {
      return sum;
    }

    return this.getSeries(x, n + 1, sum + term, factorial * (n + 1));
  }

  getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.1) {
    let x = xn;

    while (x <= xk) {
      const y = this.getSeries(x);
      this.xy.set(x, y);
      if (this.logService) {
        this.logService.write('x=' + x.toFixed(2) + ' y=' + y.toFixed(4));
      }
      x += h;
    }

    return this.xy;
  }
}