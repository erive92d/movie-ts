import React from 'react'
import { resultProps } from '../props/props'
interface selectProps {
  handleSelector: React.MouseEventHandler<HTMLButtonElement>
  items: resultProps[]
  selectItem:string
}

export default function Selector({handleSelector, selectItem}:selectProps) {
  
  return (
    <div className='text-gray-200'>
      <nav className='flex justify-between p-2'>
        <button 
        className={`${selectItem === 'popular' ? ' scale-105 duration-100 bg-gradient-to-b from-cyan-500 to-slate-600': ''} bg-slate-600 p-2 text-md `}
        name="popular" onClick={handleSelector}>Most popular</button>
        <button
        className={` ${selectItem === 'top_rated' ? ' scale-105 duration-100 bg-gradient-to-b from-cyan-500 to-slate-600': '' } bg-slate-600 p-2 text-md  `}
         name="top_rated" onClick={handleSelector}>Top rated</button>
        <button
        className={`  ${selectItem === 'now_playing' ? ' scale-105 duration-100 bg-gradient-to-b from-cyan-500 to-slate-600': ''} bg-slate-600 p-2 text-md  `}
         name="now_playing" onClick={handleSelector}>Now playing</button>
        <button
        className={`  ${selectItem === 'upcoming' ? ' scale-105 duration-100 bg-gradient-to-b from-cyan-500 to-slate-600': ''} bg-slate-600 p-2 text-md`}
        name="upcoming" onClick={handleSelector}>Upcoming</button>
      </nav>
    
    </div>
  )
}
