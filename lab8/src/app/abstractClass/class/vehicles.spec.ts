import { Plane, Ship } from './classes';

describe('Plane testing', () => {
  let plane: Plane;
  beforeEach(() => {
    plane = new Plane('Plane 1', 5, 200);
  });

  it('Plane was created', () => {
    expect(plane).toBeTruthy();
  });

  it('Check cost', () => {
    let expectedCost = 100 * plane.h * plane.v;
    let realCost = plane.getCost();

    expect(expectedCost.toFixed(2)).toBe(realCost.toFixed(2));
  });
});

describe('Ship testing', () => {
  let ship: Ship;
  beforeEach(() => {
    ship = new Ship('Ship 1', 5, 'Odesa port');
  });

  it('Plane was created', () => {
    expect(ship).toBeTruthy();
  });

  it('Check cost', () => {
    let expectedCost = 5 * ship.k * ship.k;
    let realCost = ship.getCost();

    expect(expectedCost.toFixed(2)).toBe(realCost.toFixed(2));
  });
});
