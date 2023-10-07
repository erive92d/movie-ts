import { PersonProps, resultProps } from "../../props/props"
import { Link } from "react-router-dom"
import NoImage from "../../assets/no_image.png"

type DiffResult = resultProps & PersonProps


interface ResultProps {
  result: DiffResult[] | undefined
  format: string
}

export default function SearchResult({ result, format }: ResultProps) {


  const formatType = (format: string) => {
    if (format === "tv") {
      return "tv"
    }
    if (format === "person") {
      return "person"
    }
    if (format === "movie") {
      return "movie"
    }
  }



  return (
    <div className="bg-slate-100 w-3/4 lg:w-full z-10 absolute top-16 rounded-lg px-3 max-h-72 overflow-auto ">
      {result && result.map((res) => (
        <Link className="flex gap-2 border-b-2 border-b-cyan-500 py-1" to={`/${formatType(format)}/${res.id}`} key={res.id}>
            <img  src={`${res.poster_path || res.profile_path ? `https://image.tmdb.org/t/p/w500/${res.poster_path || res.profile_path} ` : NoImage}`} className="w-10" alt="" />
            <div>
              <h1 className="text-black">{res.title || res.name}</h1>
              {res.vote_average && <p>{Math.floor(res.vote_average)} / 10 <span className="text-yellow-400">★</span></p>
              }
            </div>
        </Link>
      ))}
    </div>
  )
}







