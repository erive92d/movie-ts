export interface resultProps{
    id: number,
    title: string,
    overview: string,
    image: string,
    popularity:number,
    poster_path: string | null
    backdrop_path: string | null
    release_date: string
    video: boolean
    vote_average: number
    vote_count: number
    genres: {
      id:number,
      name:string
    }[]
    runtime: number
    tagline: string
  }
  