export class Facultet {
  name: string = '';
  deacanFullName: string = '';
  phone: string = '';
  address: string = '';
  cafedres: string[] = [];

  constructor(
    name: string,
    decanfullName: string,
    phone: string,
    address: string,
    cafedres: string[]
  ) {
    this.name = name;
    this.deacanFullName = decanfullName;
    this.phone = phone;
    this.address = address;
    this.cafedres = cafedres;
  }
}
