

export interface ITvShowsDisplay {
  id: number,
  url: string,
  name: string,
  language: string,
  scheduleTime: number,
  scheduleDays: string[],
  rating: number,
  image: string,
  summary: string,
  networkname: string,
}

// Create an interface of type array which extends from ITvShowsDisplay
export interface IarrayTvShowsDisplay extends Array<ITvShowsDisplay>{}
