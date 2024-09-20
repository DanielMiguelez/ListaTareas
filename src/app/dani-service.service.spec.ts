import { TestBed } from '@angular/core/testing';

import { DaniServiceService } from './dani-service.service';

describe('DaniServiceService', () => {
  let service: DaniServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaniServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
