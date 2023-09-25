import { useState } from 'react'

import Search from '../../components/Search'
import Dropdown from '../../components/Dropdown'



export default function SearchComp() {
      const [formatSearch, setFormat] = useState("movie")
    
      const handleFormat = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault()
        setFormat(event.currentTarget.value)
      }

      
    const options = [
        "movie", "tv"
    ]

  return (
    <div className='flex items-center gap-2 p-2'>
        <Dropdown options={options} handleFormat={handleFormat} selectedFormat={formatSearch}/>
        <Search format={formatSearch} inputType={formatSearch} />
    </div>
  )
}
