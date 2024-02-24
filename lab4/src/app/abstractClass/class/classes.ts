export abstract class Vehicle {
  name: string = '';
  constructor() {}

  abstract getCost(): number;
}

export class Plane extends Vehicle {
  h: number;
  v: number;

  constructor(override name: string, h: number, v: number) {
    super();
    this.h = h;
    this.v = v;
  }

  getCost(): number {
    return 100 * this.h * this.v;
  }
}

export class Ship extends Vehicle {
  k: number;
  port: string;

  constructor(override name: string, k: number, port: string) {
    super();
    this.k = k;
    this.port = port;
  }

  getCost(): number {
    return 5 * this.k * this.k;
  }
}
