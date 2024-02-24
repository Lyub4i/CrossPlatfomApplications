import { Component, ViewChild, ElementRef } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-file',
  templateUrl: 'file.page.html',
  styleUrls: ['file.page.scss'],
})
export class FilePage {
  data: { record: any } = { record: {} };
  dataNewspapers: any = [];
  showDetails: boolean[] = new Array(1000).fill(false);
  dataUrl = 'https://api.jsonbin.io/v3/qs/65da53621f5677401f33e92d';
  loading: any;
  month: string = '';

  constructor(public loadingController: LoadingController) {}

  async load() {
    this.loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Loading...',
    });

    await this.loading.present();

    fetch(this.dataUrl)
      .then((res) => res.json())
      .then((json) => {
        this.data = json;
        this.data = this.data.record;
        let i = 0;

        this.loading.dismiss();
      });
  }

  isCorrectMonth(month: any) {
    if (typeof month === 'string') {
      return month.toUpperCase() === this.month.toUpperCase();
    }
    return false;
  }
}
