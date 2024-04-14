import { City } from './City';

export class CityList {
  city = new Map();

  constructor() {
    this.city.set(0, { id: 0, name: 'Kyiv' });
    this.city.set(1, { id: 1, name: 'Lviv' });
  }

  addCity(city: City) {
    this.city.set(city.id, { id: city.id, name: city.name });
  }
}
