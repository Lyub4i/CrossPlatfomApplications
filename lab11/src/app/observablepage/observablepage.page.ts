import { Component, OnInit } from '@angular/core';
import { CityList } from './clasese/CityList';
import { ConfigService } from 'src/service/config.service';
import { Subscription } from 'rxjs';
import { BusinessList } from './clasese/BusinessList';
import { City } from './clasese/City';
import { Business } from './clasese/Business';
import { FirebaseService } from 'src/service/firebase.service';

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

  bdCity = 'city';
  bdBusiness = 'business';
  constructor(private fbService: FirebaseService) {}

  ngOnInit() {
    this.fetchTask(this.bdBusiness, true);

    let taskRes = this.fbService.getRecordList(this.bdBusiness, true);
    taskRes.snapshotChanges().subscribe();

    this.fetchTask(this.bdCity, false);
    let taskRes1 = this.fbService.getRecordList(this.bdCity, false);
    taskRes1.snapshotChanges().subscribe();

    console.log("Good");
    
    const citySub = this.configService.city$.subscribe(() => {
      this.city = this.configService.city$.value;
    });
    this.subscriptions.push(citySub);

    console.log("Error");
  }

  fetchTask(bd: any, op: any) {
    this.fbService
      .getRecordList(bd, op)
      .valueChanges()
      .subscribe((res) => {
        console.log("Res: " + res);
        if (op) {
          this.businessList.businessList = res;
        } else {
          this.cities.city = res;
          this.city = this.cities.city[this.count];
          this.businessList.serch(this.city.id);
        }
      });
  }

  nextCity() {
    if (this.count < this.cities.city.length - 1) {
      this.count++;
    } else {
      this.count = 0;
    }

    this.configService.setCity(this.cities.city[this.count]);
  }

  addCity(city: any) {
    let c = new City();
    c.id = this.cities.city.length + 1;
    c.name = city;

    this.fbService.createCity(c);
  }

  addBusiness(name: any, head: any, address: any, mainOffice: any, year: any) {
    let business = new Business();
    business.name = name;
    business.owner = head;
    business.address = address;
    business.mainOffice = mainOffice;
    business.created = year;
    business.city_id = this.city.id;

    this.fbService.createBusiness(business);
    this.businessList.serch(this.city.id);
    this.businessList.add(business);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
