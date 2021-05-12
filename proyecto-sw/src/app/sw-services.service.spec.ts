import { TestBed } from '@angular/core/testing';

import { SwServicesService } from './sw-services.service';

describe('SwServicesService', () => {
  let service: SwServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
