import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Business } from 'src/app/observablepage/clasese/Business';
import { City } from 'src/app/observablepage/clasese/City';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  businessListRef?: AngularFireList<any>;
  cityListRef?: AngularFireList<any>;
  bdRef?: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}

  createCity(city: City) {
    return this.cityListRef?.push({
      id: city.id,
      name: city.name,
    });
  }

  createBusiness(business: Business) {
    return this.businessListRef?.push({
      name: business.name,
      city_id: business.city_id,
      owner: business.owner,
    });
  }

  getRecord(id: string, bd: string) {
    this.bdRef = this.db.object('/' + bd + id);
    console.log('bdRef=' + this.bdRef.snapshotChanges());
    return this.bdRef;
  }

  getRecordList(bd: string, op: boolean) {
    if (op) {
      this.businessListRef = this.db.list('/' + bd);
      console.log('Business: ' + this.businessListRef);

      return this.businessListRef;
    } else {
      this.cityListRef = this.db.list('/' + bd);
      console.log('City: ' + this.cityListRef);
      return this.cityListRef;
    }
  }

  updateCity(id: number, city: City, bd: string) {
    this.bdRef = this.db.object('/' + bd + '/' + id);
    return this.bdRef.update({
      id: city.id,
      name: city.name,
    });
  }

  deleteRecord(id: string, bd: string) {
    this.bdRef = this.db.object('/' + bd + '/' + id);
    this.bdRef.remove();
  }
}
