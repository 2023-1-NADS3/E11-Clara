import { TestBed } from '@angular/core/testing';

import { VerifyLogedService } from './verify-loged.service';

describe('VerifyLogedService', () => {
  let service: VerifyLogedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyLogedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
