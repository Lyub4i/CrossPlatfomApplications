import { Component, ViewChild, ElementRef } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-file',
  templateUrl: 'file.page.html',
  styleUrls: ['file.page.scss'],
})
export class FilePage {
  data: MonthData = {};
  dataNewspapers: any = [];
  showDetails: boolean[] = new Array(1000).fill(false);
  dataUrl = 'https://api.jsonbin.io/v3/qs/65da53621f5677401f33e92d';
  loading: any;
  month: string = '';

  constructor(public loadingController: LoadingController) {}

  ngOnInit() {}

  async load() {
    this.loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Loading...',
    });

    await this.loading.present();

    fetch(this.dataUrl)
      .then((response) => response.json())
      .then((data) => {
        this.data = data.record;
        console.log(this.data);
      });

    this.loading.dismiss();
  }

  isCorrectMonth(month: any) {
    if (typeof month === 'string') {
      return month.toUpperCase() === this.month.toUpperCase();
    }
    return false;
  }
}

interface Newspaper {
  title: string;
  issue_number: number;
  publication_date: string;
  page_count: number;
}

interface MonthData {
  [key: string]: Newspaper[];
}
