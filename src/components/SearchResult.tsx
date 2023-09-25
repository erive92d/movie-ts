import { PersonProps, resultProps } from "../props/props"
import { Link } from "react-router-dom"
import NoImage from "../assets/no_image.png"

interface ResultProps {
    result: (resultProps[] | PersonProps[])
    resultType: string
  }


export default function SearchResult({result, resultType}:ResultProps) {
   
    if(resultType === "person") {
      return (
        <div className="bg-slate-100 w-3/4 lg:w-full absolute top-16 rounded-lg px-3 max-h-72 overflow-auto ">
          {result && result.map((pers) => (
          <Link className="flex gap-2 border-b-2 border-b-cyan-500 py-1" to={`/pers/${pers.id}`} key={pers.id}>
            <img src={`${pers.profile_path ? `https://image.tmdb.org/t/p/w500/${pers.profile_path} ` : NoImage}`} className="w-10" alt="" />
            <div>
              <h1 className="text-black">{pers.name}</h1>
            </div>
           
          </Link>
        ))}
      </div>
      )
    }


    return (
      <div className="bg-slate-100 w-3/4 lg:w-full absolute top-16 rounded-lg px-3 max-h-72 overflow-auto ">
        {result && result.map((movie) => (
          <Link className="flex gap-2 border-b-2 border-b-cyan-500 py-1" to={`/movie/${movie.id}`} key={movie.id}>
            <img src={`${movie.poster_path || movie.profile_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path || movie.profile_path} ` : NoImage}`} className="w-10" alt="" />
            <div>
              <h1 className="text-black">{movie.title ? movie.title : movie.name}</h1>
              <p>{Math.floor(movie.vote_average)} / 10 <span className="text-yellow-400">★</span></p>
            </div>
           
          </Link>
        ))}
      </div>
    )
  }