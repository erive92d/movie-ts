import React from 'react'
import { resultProps } from '../props/props'

interface pageProps {
    handlePage:React.MouseEventHandler<HTMLButtonElement>
    items: resultProps[]
    page:number
}



export default function PageHandler({handlePage, page}:pageProps) {
  return (
    <div className='text-cyan-500 p-2 font-bold flex justify-around'>
        <div className={page === 1 ? "hidden" : ""}>
            <button name="back"  onClick={handlePage}>Back</button>
        </div>
        
        <div>
            <button name="next" onClick={handlePage}>Next</button>
        </div>
   
    </div>
  )
}
