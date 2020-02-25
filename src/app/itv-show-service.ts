import { Observable } from 'rxjs';
import { IarrayTvShowsDisplay } from './itv-shows-display';

export interface ItvShowService {
  getShowDetails(searchText: string): Observable<IarrayTvShowsDisplay>
  
}
