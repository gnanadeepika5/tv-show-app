import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITvShowsDisplay, IarrayTvShowsDisplay } from './itv-shows-display';
import { ITvShowsDisplayData, IarrayTvShowsDisplayData } from './itv-shows-display-data';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private httpClient: HttpClient) { }

  // Function to get data from API link
  getShowDetails(name: string):Observable<IarrayTvShowsDisplay>{
    console.log("In Get Show details function");

    return this.httpClient.get<IarrayTvShowsDisplayData>(`${environment.baseUrl}api.tvmaze.com/search/shows?q=${name}&appId=${environment.appId}`).pipe(map(data => this.transformToIarrayTvShowsDisplay(data)));
  } 

  // Transform to ITvShowsDisplay function below
  private transformToIarrayTvShowsDisplay(data: IarrayTvShowsDisplayData): IarrayTvShowsDisplay{
    var len = data.length;
    console.log("Number of shows with the given text in the name: " + len);

    var tvShowDisplayArray : IarrayTvShowsDisplay = new Array();

    for (var i=0; i<len; i++)
    {
      tvShowDisplayArray.push({
        id: data[i].show.id,
        url: `${environment.baseUrl}tvmaze.com/shows/${data[0].show.id}/${data[0].show.name}`,
        name: data[i].show.name,
        language: data[i].show.language,
        scheduleTime: data[i].show.schedule.time,
        scheduleDays: data[i].show.schedule.days,
        rating: data[i].show.rating.average,
        image: data[i].show.image != null ? data[i].show.image.medium : "https://dubsism.files.wordpress.com/2017/12/image-not-found.png",
        summary: data[i].show.summary,
        networkname: data[i].show.network != null ? data[i].show.network.name : "Not Found"
      } as ITvShowsDisplay);
    }


    return tvShowDisplayArray;

  }

}
