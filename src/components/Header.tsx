
import { resultProps } from "../props/props"
import {IoMdArrowBack} from "react-icons/io"
interface itemsProps {
  handleSelector: React.MouseEventHandler<HTMLButtonElement>
  items: resultProps[]
  selectItem:string
}

export default function Header({handleSelector, selectItem}: itemsProps) {

  return (
    <div className='flex justify-between 
    text-cyan-400 p-2  bg-gradient-to-b  from-slate-600 to-black  font-bold
    lg:p-9
    '>
          <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn btn-ghost drawer-button btn-circle">      
                  <svg className=" fill-current " xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                </label>
              </div> 
               <div className='drawer-side'>
               <label htmlFor="my-drawer" className="drawer-overlay"></label>
                  <ul className="menu p-4 w-40 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li>
                    <label htmlFor="my-drawer" className="drawer-button text-2xl text-cyan-500" ><IoMdArrowBack /></label>
                    </li>
                    <li className={`${selectItem === 'now_playing' ? "bg-cyan-600" : ""}`}>
                      <button name="now_playing" onClick={handleSelector}>Now Playing</button></li>
                    <li className={`${selectItem === 'popular' ? "bg-cyan-600" : ""}`}>
                      <button name="popular" onClick={handleSelector}>Most Popular</button></li>
                    <li className={`${selectItem === 'top_rated' ? "bg-cyan-600" : ""}`}>
                      <button name="top_rated" onClick={handleSelector}>Top Rated</button>
                    </li>
                    <li className={`${selectItem === 'upcoming' ? "bg-cyan-600" : ""}`}>
                      <button name="upcoming" onClick={handleSelector}>Upcoming</button>
                    </li>
                  </ul>
              </div>
              
          </div>
        <div className="">
             <p className="text-3xl font-light">MovieTS</p>
        </div>
    </div>
  )
}
