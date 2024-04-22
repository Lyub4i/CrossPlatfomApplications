import { ConfigService } from 'src/service/config.service';
import { Business } from './Business';
import { City } from './City';

export class BusinessList {
  businessList = new Array();
  searchBusiness = new Array();

  searchBusinessResult: string[] | undefined;

  citySub = this.configService.city$.subscribe(() => {
    let city = this.configService.city$.value;
    this.serch(city.id);
  });

  constructor(private configService: ConfigService) {}

  serch(city_id: number) {
    this.searchBusiness = this.businessList.filter((business) => {
      return business.city_id == city_id;
    });
  }

  add(business: Business) {
    this.businessList.push(business);
    this.serch(business.city_id);
  }
}
