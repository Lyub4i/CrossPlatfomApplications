import { Component, OnInit } from '@angular/core';
import { CityList } from './clasese/CityList';
import { ConfigService } from 'src/service/config.service';
import { Subscription } from 'rxjs';
import { BusinessList } from './clasese/BusinessList';
import { City } from './clasese/City';
import { Business } from './clasese/Business';

@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})
export class ObservablepagePage implements OnInit {
  cities = new CityList();
  private configService = new ConfigService();
  private subscriptions: Subscription[] = [];
  businessList = new BusinessList(this.configService);
  city: City = new City();
  count = 0;

  constructor() {}

  ngOnInit() {
    const citySub = this.configService.city$.subscribe(() => {
      this.city = this.configService.city$.value;
    });
    this.subscriptions.push(citySub);
  }

  nextCity() {
    if (this.count < this.cities.city.size - 1) {
      this.count++;
    } else {
      this.count = 0;
    }

    this.configService.setCity(this.cities.city.get(this.count));
  }

  addCity(city: any) {
    let c = new City();
    c.id = this.cities.city.size;
    c.name = city;
    this.cities.addCity(c);
  }

  addBusiness(name: any, head: any) {
    let business = new Business();
    business.name = name;
    business.owner = head;
    business.city_id = this.city.id;
    this.businessList.add(business);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
