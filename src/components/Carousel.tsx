import { Link } from "react-router-dom"
import { resultProps } from "../props/props"

interface LandingProps {
    data: resultProps[]
    loading?: boolean
}

export default function ResultCarousel ({data, loading}:LandingProps) {

    if(loading) return (
        <div className="text-center ">
                <span className="loading loading-bars loading-lg"></span>
        </div>
    )

    return (
        <div className="carousel space-x-4 ">
              {data ? data.map((movie) => (
                  <Link to={`/movie/${movie.id}`} className="carousel-item w-2/5 lg:w-1/4 " key={movie.id}>
                      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className=""/>
                  </Link> 
              )) : <span className="loading loading-infinity loading-lg"></span>}
      </div>
    )
}