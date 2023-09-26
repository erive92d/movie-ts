import { resultProps } from "../../props/props"
import { Link } from "react-router-dom"
import NoImage from "../../assets/no_image.png"



interface ResultProps {
  movieResult?: resultProps[]
  format: string
}

export default function SearchResult({ movieResult, format }: ResultProps) {
  console.log(movieResult)

  return (
    <div className="bg-slate-100 w-3/4 lg:w-full absolute top-16 rounded-lg px-3 max-h-72 overflow-auto ">
      {movieResult && movieResult.map((movie) => (
        <Link className="flex gap-2 border-b-2 border-b-cyan-500 py-1" to={`/${format === "movie" ? "movie" : "tv"}/${movie.id}`} key={movie.id}>
          <img src={`${movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path} ` : NoImage}`} className="w-10" alt="" />
          <div>
            <h1 className="text-black">{movie.title || movie.name}</h1>
            {movie.vote_average && <p>{Math.floor(movie.vote_average)} / 10 <span className="text-yellow-400">★</span></p>
            }
          </div>
        </Link>
      ))}
    </div>
  )
}







