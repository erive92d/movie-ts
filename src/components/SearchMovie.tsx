// import { useEffect } from "react"
// import { searchMovie } from "../api/api"

interface searchInputProps {
  handleChangeInput:React.ChangeEventHandler<HTMLInputElement>
  handleSearch:React.MouseEventHandler<HTMLButtonElement>
}

export default function SearchMovie({handleChangeInput, handleSearch}:searchInputProps) {

  return (
    <div className="p-3 flex items-center space-x-2 lg:justify-center">
        <input type="text" onChange={handleChangeInput} placeholder="search movie..." 
        className="input input-bordered input-info w-full max-w-xs
        
        " />
        <button className="btn btn-info btn-md" onClick={handleSearch}>Search</button>
    </div>
  )
}
