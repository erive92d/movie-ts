import React from 'react'
import { resultProps } from '../props/props'
import { useState, useEffect } from 'react'
import { pageBanner } from '../helpers/pageTitle'
interface selectProps {
  handleSelector: React.MouseEventHandler<HTMLButtonElement>
  items: resultProps[]
  selectItem:string
}

export default function Selector({handleSelector, selectItem}:selectProps) {
  
  const [pageTitle, setPageTitle] = useState<string>("")

  useEffect(() => {
    const page:string | undefined = pageBanner(selectItem)
    if(page) {
      setPageTitle(page)
    }

  },[selectItem])
console.log(selectItem)

  return (
    <div className='text-gray-200'>
      <nav className='flex justify-between p-2'>
        <button 
        className={`bg-slate-600 p-2 text-md   ${selectItem === 'popular' ? ' bg-red-600': null}`}
        name="popular" onClick={handleSelector}>Most popular</button>
        <button
        className={`bg-slate-600 p-2 text-md    ${selectItem === 'top_rated' ? ' bg-red-600': null}`}
         name="top_rated" onClick={handleSelector}>Top rated</button>
        <button
        className={`bg-slate-600 p-2 text-md    ${selectItem === 'now_playing' ? ' bg-red-600': null}`}
         name="now_playing" onClick={handleSelector}>Now playing</button>
        <button
        className={`bg-slate-600 p-2 text-md    ${selectItem === 'upcoming' ? ' bg-red-600': null}`}
        name="upcoming" onClick={handleSelector}>Upcoming</button>
      </nav>
      <div className='p-2'>
        <h1 className='text-lg font-light text-center'>{pageTitle}</h1>
      </div>
    </div>
  )
}
