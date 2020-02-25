import { Component } from '@angular/core';
import { ItvShowService } from './itv-show-service';
import { ITvShowsDisplay, IarrayTvShowsDisplay } from './itv-shows-display';
import { TvShowService } from './tv-show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show-app';
  tvshowsdisplay: IarrayTvShowsDisplay;
  constructor(private tvshowservice: TvShowService){}
  doSearch(searchValue){
    const userInput = searchValue.trim();
        this.tvshowservice.getShowDetails(userInput).subscribe(data => this.tvshowsdisplay =  data);

  }
}
