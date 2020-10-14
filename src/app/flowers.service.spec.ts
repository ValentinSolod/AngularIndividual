import { TestBed } from '@angular/core/testing';

import { FlowersService } from './flowers.service';

describe('FlowersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlowersService = TestBed.get(FlowersService);
    expect(service).toBeTruthy();
  });
});
