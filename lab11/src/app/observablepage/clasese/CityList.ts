import { City } from './City';

export class CityList {
  city = new Array();

  constructor() {}

  addCity(city: City) {
    this.city.push(city)
  }
}
