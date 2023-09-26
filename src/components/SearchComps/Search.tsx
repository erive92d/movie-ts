// import { useEffect } from "react"
// import { searchMovie } from "../api/api"
import SearchResult from "./SearchResult"
import { useState } from 'react'
import UseDebounce from "../../helpers/UseDebounce"
import { useQuery } from "@tanstack/react-query"
import {  fetchSearch } from "../../api/api"
import Dropdown from "../Dropdown"
import SearchResultPeople from "./SearchResultPeople"

export default function Search() {

  const [input, setInput] = useState<string>("")

  const [formatSearch, setFormat] = useState("movie")


  const {debouncedValue, loading} = UseDebounce(input, 500)
   const {data} = useQuery({
    queryKey:["static", debouncedValue],
    queryFn: () => {
      if(debouncedValue) {
        return fetchSearch(debouncedValue, formatSearch)
      }
      return []
    }   
   })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setInput(e.currentTarget.value)
  }

  const handleFormat = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    setFormat(event.currentTarget.value)
  }
  
  const options = [
    "movie", "tv", "person"
]
  

  return (
    <div className=" flex items-center lg:w-2/3 lg:mx-auto lg:justify-center relative w-full">
        <div className="flex w-full gap-4">
          <div className="flex gap-2 p-2">
            <Dropdown options={options} handleFormat={handleFormat} selectedFormat={formatSearch}/>
            <input type="text" value={input}  onChange={handleChange} 
            className="input 
            " />
          </div>
          <div className="flex justify-center">
            {loading && <span className="loading loading-infinity loading-lg text-cyan-500"></span>}
          </div>
        </div>
        {data && formatSearch === "person" && <SearchResultPeople personResult={data}/>}
        {data && formatSearch === "tv" && <SearchResult movieResult={data} />}
        {data && formatSearch === "movie" && <SearchResult movieResult={data}/>}
    </div>
  )
}


