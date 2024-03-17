import { TestBed } from '@angular/core/testing';

import { RecursionServiceService } from './recursion-service.service';

describe('RecursionServiceService', () => {
  let service: RecursionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('SumSeries: x=0.1, y=1.1052', () => {
    let x = 0.1;
    let y = 1.1052;
    let y1 = service.getSeries(x);

    if (y1 !== undefined) {
      expect(y.toFixed(4)).toBe(y1.toFixed(4));
    }
  });
});
