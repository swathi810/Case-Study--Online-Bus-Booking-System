import { TestBed } from '@angular/core/testing';

import { BusService } from './services.service';

describe('ServicesService', () => {
  let service: BusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
