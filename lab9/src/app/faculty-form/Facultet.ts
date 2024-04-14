export class Facultet {
  name: string = '';
  deacanFullName: string = '';
  phone: string = '';
  address: string = '';
  cafedres: any[] = [];

  constructor(
    name: string,
    decanfullName: string,
    phone: string,
    address: string,
    cafedres: any[]
  ) {
    this.name = name;
    this.deacanFullName = decanfullName;
    this.phone = phone;
    this.address = address;
    this.cafedres = cafedres;
  }
}
