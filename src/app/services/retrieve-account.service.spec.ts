import { TestBed } from '@angular/core/testing';

import { RetrieveAccountService } from './retrieve-account.service';

describe('RetrieveAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetrieveAccountService = TestBed.get(RetrieveAccountService);
    expect(service).toBeTruthy();
  });
});
