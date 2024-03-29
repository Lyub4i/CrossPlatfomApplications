import { Component, ViewChild, ElementRef } from '@angular/core';
import { TabService } from '../../service/tab.service';
import { SeriesService } from '../../service/series.service';
import { RecursionServiceService } from '../../service/recursion-service.service';

@Component({
  selector: 'app-servicePage',
  templateUrl: 'servicePage.page.html',
  styleUrls: ['servicePage.page.scss'],
})
export class ServicePagePage {
  xn: number = 0.1;
  xk: number = 3.14;
  h: number = 0.1;
  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput = new Map();
  constructor(
    private tabService: TabService,
    private seriesService: SeriesService,
    private recurseService: RecursionServiceService
  ) {}

  ras() {
    console.log('Табулювання');
    this.xyTab = this.tabService.getTab(this.xn, this.xk, this.h);
    console.log('Ряд');
    this.xySeries = this.seriesService.getTab(this.xn, this.xk, this.h);
    console.log('Рекурсія');
    this.xyRecursion = this.recurseService.getTab(this.xn, this.xk, this.h);

    this.input();
  }

  input() {
    this.xyTab.forEach((value, key, map) => {
      let s = '';
      let y: number = 0;
      y = value;
      s = y.toFixed(4)+" ";
      y = this.xySeries.get(key);
      s = s + y.toFixed(4);
      y = this.xyRecursion.get(key);
      s = s + ' ' + y.toFixed(4);
      let x = key;
      this.xyInput.set(x.toFixed(2), s);
    });
  }
}
