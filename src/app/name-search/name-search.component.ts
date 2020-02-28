import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators } from '@angular/forms';
import { TvShowService } from '../tv-show.service';
import { debounceTime } from 'rxjs/operators'

  

@Component({
  selector: 'app-name-search',
  templateUrl: './name-search.component.html',
  styleUrls: ['./name-search.component.css']
})
export class NameSearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
search = new FormControl('',[Validators.minLength(3)]);
  constructor(private tvshowService: TvShowService) { }

  ngOnInit(): void {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((searchValue: string) => {
      if(!this.search.invalid && searchValue){
        this.searchEvent.emit(searchValue);
        // const userInput = searchValue.trim();
        // this.tvshowService.getShowDetails(userInput).subscribe(data => console.log(data));
      }
      if(this.search.invalid){
        this.searchEvent.emit('invalid');
      }
    })
  }

}
