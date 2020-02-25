import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TvShowsDisplayComponent } from './tv-shows-display.component';
import { TvShowService } from '../tv-show.service';
import { TvShowFakeService } from '../tv-show-fake.service';

describe('TvShowsDisplayComponent', () => {
  let component: TvShowsDisplayComponent;
  let fixture: ComponentFixture<TvShowsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowsDisplayComponent ],
      imports: [HttpClientModule],
      providers: [{provide: TvShowService, useClass: TvShowFakeService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
