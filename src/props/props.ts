export interface resultProps{
    id: number,
    adult:boolean
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
    genre_ids: number[]
    runtime: number
    tagline: string
    production_companies: {
      id:number
      logo_path:string
    }[]
    name:string
  }


  export interface PersonProps {
    adult:boolean
    gender: number
    id: number
    known_for: resultProps[]
    known_for_department: string
    name:string
    popularity: number
    profile_path: string

  }
  