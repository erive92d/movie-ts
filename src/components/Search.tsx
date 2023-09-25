// import { useEffect } from "react"
// import { searchMovie } from "../api/api"
import SearchResult from "./SearchResult"
import { useState } from 'react'
import UseDebounce from "../helpers/UseDebounce"
import { useQuery } from "@tanstack/react-query"
import {  fetchSearchPeople, searchMovie } from "../api/api"

interface InputProps {
    inputType: string
    format:string
  }


export default function Search({inputType, format}:InputProps) {

  const [input, setInput] = useState<string>("")

  const {debouncedValue, loading} = UseDebounce(input, 500)
   const {data} = useQuery({
    queryKey:["static", debouncedValue],
    queryFn: () => {
      if(inputType === "person") {
        return fetchSearchPeople(debouncedValue)
      }

      if(format === format) {
        return searchMovie(debouncedValue, format)
      }
      return []
    }   
   })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setInput(e.currentTarget.value)
  }

  

  return (
    <div className=" flex items-center lg:w-2/3 lg:mx-auto lg:justify-center relative w-full">
        <div className="flex w-full gap-4">
          <div className="">
            <input type="text" value={input} name={inputType}  onChange={handleChange} 
            className="input w-96
            " />
          </div>
          <div className="flex justify-center">
            {loading && <span className="loading loading-infinity loading-lg text-cyan-500"></span>}
          </div>
        </div>
        {data  && <SearchResult  result={data} resultType={inputType}  /> }
    </div>
  )
}


