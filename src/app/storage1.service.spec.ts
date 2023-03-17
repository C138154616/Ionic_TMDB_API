import { TestBed } from '@angular/core/testing';

import { Storage1Service } from './storage1.service';

describe('Storage1Service', () => {
  let service: Storage1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Storage1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
