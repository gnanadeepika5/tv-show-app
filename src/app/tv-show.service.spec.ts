import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TvShowService } from './tv-show.service';

describe('TvShowService', () => {
  let service: TvShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(TvShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
