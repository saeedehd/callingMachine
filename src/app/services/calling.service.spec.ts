import { TestBed } from '@angular/core/testing';

import { CallingService } from './calling.service';

describe('CallingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallingService = TestBed.get(CallingService);
    expect(service).toBeTruthy();
  });
});
