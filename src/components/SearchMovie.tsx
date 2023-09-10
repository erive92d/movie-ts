// import { useEffect } from "react"
// import { searchMovie } from "../api/api"

interface searchInputProps {
  handleChangeInput:React.ChangeEventHandler<HTMLInputElement>
}

export default function SearchMovie({handleChangeInput}:searchInputProps) {

  return (
    <div className="p-2">
        <input type="text" onChange={handleChangeInput} placeholder="search movie..." className="input input-bordered input-info w-full max-w-xs" />
    </div>
  )
}
