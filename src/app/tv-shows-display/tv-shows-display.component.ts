import { Component, OnInit, Input } from '@angular/core';
import { ITvShowsDisplay, IarrayTvShowsDisplay } from '../itv-shows-display';
import { TvShowService } from '../tv-show.service';
import { ItvShowService } from '../itv-show-service';


@Component({
  selector: 'app-tv-shows-display',
  templateUrl: './tv-shows-display.component.html',
  styleUrls: ['./tv-shows-display.component.css']
})
export class TvShowsDisplayComponent implements OnInit {
 @Input() currentdata: IarrayTvShowsDisplay;
  constructor(private tvshowservice: TvShowService) { }
  
  ngOnInit(): void {
    this.tvshowservice.getShowDetails('marvel').subscribe(data => this.currentdata = data);
  }

}
