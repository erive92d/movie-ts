import { Link } from "react-router-dom"
import { PersonProps, resultProps } from "../props/props"

type ResultProps = resultProps & PersonProps

interface LandingProps {
    data: ResultProps[]
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
              {data ? data.map((movie, index) => (
                  <Link to={`/movie/${movie.id}`} className={` carousel-item relative w-2/5 lg:w-1/4 ${movie.profile_path && "w-1/5 rounded-box"}`} key={index}>
                      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path || movie.profile_path}`} className="" />
                        <p className="absolute bottom-0 text-6xl text-gray-300  bg-black bg-opacity-80 rounded-tr-lg font-bold">{index + 1}</p>
                  </Link> 
              )) : <span className="loading loading-infinity loading-lg"></span>}
      </div>
    )
}