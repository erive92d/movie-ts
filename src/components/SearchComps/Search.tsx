// import { useEffect } from "react"
// import { searchMovie } from "../api/api"
import SearchResult from "./SearchResult"
import { useState } from 'react'
import UseDebounce from "../../helpers/UseDebounce"
import { useQuery } from "@tanstack/react-query"
import { fetchSearch } from "../../api/api"
import { resultProps, PersonProps } from "../../props/props"
import Dropdown from "../Dropdown"
import PlaceHolder from "./Placeholder"

type SearchProps = resultProps & PersonProps

export default function Search() {

  const [input, setInput] = useState<string>("")

  const [formatSearch, setFormat] = useState("movie")


  const { debouncedValue, loading } = UseDebounce(input, 500)
  const { data } = useQuery<SearchProps[] | undefined>({
    queryKey: ["static", debouncedValue, formatSearch],
    queryFn: () => {
      if (debouncedValue) {
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

  const { placeholder } = PlaceHolder(formatSearch)


  return (
    <div className=" flex items-center lg:mx-auto lg:justify-center relative w-full">
      <div className="flex w-full gap-4">
        <div className="flex gap-2 p-2 lg:w-full">
          <Dropdown options={options} handleFormat={handleFormat} selectedFormat={formatSearch} />
          <input type="text" value={input} onChange={handleChange} placeholder={placeholder}
            className="input lg:w-full
            " />
        </div>
        <div className="flex justify-center">
          {loading && <span className="loading loading-infinity loading-lg text-cyan-500"></span>}
        </div>
      </div>
      {/* {data && formatSearch === "person" && <SearchResultPeople personResult={data} />} */}
      <SearchResult result={data} format={formatSearch} />
      {/* <SearchResult movieResult={data}/>} */}
    </div>
  )
}


