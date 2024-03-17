import { Component, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: 'graph.page.html',
  styleUrls: ['graph.page.scss'],
})
export class GraphPage {
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  lineChart: any;
  xn: number = -4.2;
  xk: number = 28.1;
  h: number = 0.1;
  a: number = 0;
  xx: string[] = [];
  yy: number[] = [];
  data1: string[] = [];

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(){

  }

  graphras() {
    this.data1 = [];
    let x: number,
      y: number,
      i: number = 0;
    x = this.xn;
    this.xx = new Array();
    this.yy = new Array();

    while (x < this.xk) {
      if (x <= 0) {
        y = Math.abs(5) ** (Math.sin(x) + 2) * x + Math.sin(x);
      } else if (x <= this.a) {
        y = Math.pow(x, 3) + Math.pow(Math.abs(x) + 1, 0.1 * x);
      } else {
        y =
          Math.pow(Math.sin(x + 2), 3) /
          Math.pow(Math.pow(Math.sin(x), 2) + Math.pow(Math.cos(x), 4), 1 / 4);
      }
      this.xx.push(x.toFixed(1));
      this.yy.push(parseFloat(y.toFixed(1)));
      let s = 'x= ' + x.toFixed(1) + ' y= ' + y.toFixed(1);
      this.data1.push(s);
      x = x + this.h;
    }

    this.lineChartMethod();
  }

  lineChartMethod() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }

    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Графік функції',
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.yy,
            spanGaps: false,
          },
        ],
      },
    });
  }
}
