import { Component, OnInit } from '@angular/core';
import { ITvShowsDisplay } from '../itv-shows-display';

@Component({
  selector: 'app-tv-shows-display',
  templateUrl: './tv-shows-display.component.html',
  styleUrls: ['./tv-shows-display.component.css']
})
export class TvShowsDisplayComponent implements OnInit {
  currentdata: ITvShowsDisplay
  constructor() { 
    this.currentdata.image ="test location",
    this.currentdata.language = "EN",
    this.currentdata.networkname = "ABC",
    this.currentdata.rating = 4.5
    this.currentdata.summary = "This is a test tvshow",
    this.currentdata.schedule.days = 2,
    this.currentdata.schedule.time = 17
  }

  ngOnInit(): void {
  }

}
