import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { City } from 'src/app/observablepage/clasese/City';
import { CityList } from 'src/app/observablepage/clasese/CityList';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  currenyCity = DEFAULT_CITY;
  city$: BehaviorSubject<City> = new BehaviorSubject<City>(DEFAULT_CITY);

  setCity(city: City) {
    console.log("Змінено");
    
    this.city$.next(city);
  }

  constructor() {}
}

const DEFAULT_CITY = {"id": 1, "name": "Київ"}