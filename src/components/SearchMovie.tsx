// import { useEffect } from "react"
// import { searchMovie } from "../api/api"

import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { searchMovie } from "../api/api"
import { resultProps } from "../props/props"
import UseDebounce from "../helpers/UseDebounce"
import { Link } from "react-router-dom"
import NoImage from "../assets/no_image.png"

interface ResultProps {
  result: resultProps[] | undefined
  isLoading: boolean
}






export default function SearchMovie() {

  const [inputText, setInputText] = useState<string>("")

  const debouncedSearch = UseDebounce(inputText, 500)

  const {data, isLoading} = useQuery<resultProps[] | undefined>({
    queryKey:["inputText", debouncedSearch],
    queryFn: () => {
      if(debouncedSearch) {
        return searchMovie(debouncedSearch)
      }
      return []
    }
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setInputText(event.currentTarget.value)
  }

  return (
    <div className="p-3 flex items-center lg:w-2/3 lg:mx-auto lg:justify-center relative w-full">
        <input type="text" onChange={handleChange} placeholder="search movie..." 
        className="input input-bordered input-info w-full
        " />
        {data && data.length > 0 && <SearchResult isLoading={isLoading} result={data} /> }
    </div>
  )
}

function SearchResult({result, isLoading}:ResultProps) {

  return (
    <div className="bg-slate-500 w-96 lg:w-full  text-white absolute top-16 rounded-lg px-3 max-h-72 overflow-auto ">
      {isLoading && <h1>Loading...</h1>}
      {result && result.map((movie) => (
        <Link className="flex gap-2 border-b-2 border-b-cyan-500 py-1" to={`/movie/${movie.id}`} key={movie.id}>
          <img src={`${movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : NoImage}`} className="w-10" alt="" />
          <h1>{movie.title}</h1>
        </Link>
      ))}
    </div>
  )
}
