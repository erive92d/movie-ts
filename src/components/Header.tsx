
import { Link } from "react-router-dom"
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
    text-cyan-400 bg-gradient-to-b from-slate-600 to-black  font-bold
    '>
          <div className="drawer z-10">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <div className="w-full navbar bg-base-300">
                <div className="flex-none lg:hidden">
                  <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                  </label>
                </div> 
                <div className="flex-1 px-2 mx-2 text-3xl font-light">MovieTS</div>
                <div className="flex-none hidden lg:block">
                  <ul className="menu menu-horizontal">
                    {/* Navbar menu content here */}
                    {/* Sidebar content here */}
                    {/* <li>
                      <Link to="/saved-movies">Save Movies</Link>
                    </li> */}
                     <li>
                          <Link to="/saved-movies">Watch Later</Link>
                      </li>
                    <li className={`${selectItem === 'now_playing' ? "bg-cyan-600 text-white" : ""}`}>
                      <button name="now_playing" onClick={handleSelector}>Now Playing</button></li>
                    <li className={`${selectItem === 'popular' ? "bg-cyan-600 text-white" : ""}`}>
                      <button name="popular" onClick={handleSelector}>Most Popular</button></li>
                    <li className={`${selectItem === 'top_rated' ? "bg-cyan-600 text-white " : ""}`}>
                      <button name="top_rated" onClick={handleSelector}>Top Rated</button>
                    </li>
                    <li className={`${selectItem === 'upcoming' ? "bg-cyan-600 text-white" : ""}`}>
                      <button name="upcoming" onClick={handleSelector}>Upcoming</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div> 
              <div className="drawer-side">
                 <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
                 <ul className="menu p-4 w-40 min-h-full bg-base-200">                          {/* Sidebar content here */}
                      <li>
                        <label htmlFor="my-drawer-3" className="drawer-button text-2xl text-cyan-500" ><IoMdArrowBack /></label>
                      </li>
                      <li>
                          <Link to="/saved-movies">Watch Later</Link>
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
    </div>
  )
}
