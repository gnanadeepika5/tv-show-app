export interface ITvShowsDisplayData {
  show:{
  id: number,
  url: string,
  name: string,
  language: string,
  schedule:{
    time: number,
    days: string[]
  },
  rating:{
    average: number
  },
  network:{
    name:string
  },
  image:{
    medium:string
  },
  summary: string
 }
}

// Create an interface of type array which extends from ITvShowsDisplaydata
export interface IarrayTvShowsDisplayData extends Array<ITvShowsDisplayData>{}
