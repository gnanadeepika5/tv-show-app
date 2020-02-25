import { TestBed } from '@angular/core/testing';

import { TvShowFakeService } from './tv-show-fake.service';

describe('TvShowFakeService', () => {
  let service: TvShowFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvShowFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
