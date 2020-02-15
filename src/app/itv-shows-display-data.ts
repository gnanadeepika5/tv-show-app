export interface ITvShowsDisplayData {
  show:{
  name: string,
  language: string,
  schedule:{
    time: number,
    days: number
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
