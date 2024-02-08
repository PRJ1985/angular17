import { TestBed } from '@angular/core/testing';

import { DataBusServiceService } from './data-bus-service.service';

describe('DataBusServiceService', () => {
  let service: DataBusServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBusServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
