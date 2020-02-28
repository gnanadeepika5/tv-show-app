import { Component, OnInit, Input } from '@angular/core';
import { ITvShowsDisplay, IarrayTvShowsDisplay } from '../itv-shows-display';
import { TvShowService } from '../tv-show.service';
import { ItvShowService } from '../itv-show-service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-tv-shows-display',
  templateUrl: './tv-shows-display.component.html',
  styleUrls: ['./tv-shows-display.component.css']
})
export class TvShowsDisplayComponent implements OnInit {
 @Input() currentdata: IarrayTvShowsDisplay;
 @Input() itemNotFound: string;
  displayedColumns: string[] = ['name', 'language', 'telecastedOn',  'scheduleDays', 'scheduleTime','image', 'url'];

  constructor(private tvshowservice: TvShowService) { }
  
  ngOnInit(): void {

  }

}
