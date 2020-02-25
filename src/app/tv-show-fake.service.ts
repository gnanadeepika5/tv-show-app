import { Injectable } from '@angular/core';
import { ItvShowService } from './itv-show-service';
import { IarrayTvShowsDisplay, ITvShowsDisplay } from './itv-shows-display';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvShowFakeService implements ItvShowService{
  

  constructor() { }

  public getShowDetails(searchText: string): Observable<IarrayTvShowsDisplay>{
    var len=5;
    var tvShowDisplayArrayfake : IarrayTvShowsDisplay = new Array();
    for(var i=0;i<len;i++)
    {
      tvShowDisplayArrayfake.push(
        {
        id: 123,
        url:'',
        name: 'girls',
        language: 'english',
        scheduleTime: 22.0,
        scheduleDays: [],
        rating:6.9,
        image:'',
        summary:'dummy summary',
        networkname: 'hbo'
        } as ITvShowsDisplay)
    }
    return of(tvShowDisplayArrayfake);
  }
}
