import { ConfigService } from 'src/service/config.service';
import { Business } from './Business';
import { City } from './City';

export class BusinessList {
  private businessList = new Array();
  private searchBusiness = new Array();

  searchBusinessResult: string[] | undefined;

  citySub = this.configService.city$.subscribe(() => {
    let city = this.configService.city$.value;
    this.serch(city.id);
  });

  constructor(private configService: ConfigService) {
    let business = new Business();
    business.name = 'Roshen';
    business.city_id = 0;
    business.owner = 'Poroshenko';
    this.add(business);

    let business1 = new Business();
    business1.name = 'SoftServe';
    business1.city_id = 1;
    business1.owner = 'Kecmey';
    this.add(business1);
    this.serch(0);
  }

  serch(city_id: number) {
    this.searchBusiness = this.businessList.filter((business) => {
      return business.city_id == city_id;
    });
    this.searchBusinessResult = [];
    this.searchBusiness.forEach((el) => {
      this.searchBusinessResult?.push('Назва ' + el.name);
      this.searchBusinessResult?.push('Власник ' + el.owner);
    });
  }

  add(business: Business) {
    this.businessList.push(business);
    this.serch(business.city_id);
  }
}
