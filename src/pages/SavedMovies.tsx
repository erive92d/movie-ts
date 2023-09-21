// import { rateStars } from "../helpers/rating"
import DeleteButton from "../components/DeleteButton"
import { getMovies, saveMovie } from "../localstorage/saveMovies"
import { resultProps } from "../props/props"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function SavedMovies() {

  const navigate = useNavigate()
  const [grabMovies, setGrabMovies] = useState<resultProps[]>(getMovies())

  useEffect(() => {
    saveMovie(grabMovies)
  }, [grabMovies])
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>, movieId: number) => {
    event.preventDefault()
    const confirmDelete = confirm("Are you sure?")
    if (confirmDelete) {
      const updatedLocal = grabMovies.filter((movie) => movie.id !== movieId)
      setGrabMovies(updatedLocal)
    } else {
      return
    }

  }



  return (
    <div className="bg-slate-900 p-2 min-h-screen">
      <div className="flex justify-between items-center p-2">
        <button onClick={() => navigate(-1)} className="btn btn-sm btn-info">Back</button>
        <p className="text-lg btn btn-active">Watch Later</p>
      </div>
      <div className=" flex flex-wrap
        md:flex md:flex-wrap
        ">
        {grabMovies.length === 0 ? <h1 className="text-center text-3xl">No movies saved..</h1> : grabMovies.map((movies) => (
          <div className="card w-52 bg-base-100 shadow-xl m-1
            lg:w-64
            ">
            <figure><img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {movies.title}
              </h2>
              {/* <p className="text-sm font-thin italic">{movies.overview}</p> */}
              <div className="card-actions">
                <DeleteButton movieId={movies.id} handleDelete={handleDelete} />
              </div>

            </div>

          </div>
          // <div className="carousel-item ">
          //     <img className="w-3/4" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}/>
          // </div> 
        ))}
      </div>

    </div>

  )

  // return (
  //   <div className=" p-2 bg-slate-900">
  //     <div className="flex justify-between items-center">
  //       <button onClick={() => navigate(-1)} className="btn btn-sm btn-info">Back</button>
  //       <p className="">Watch Later</p>
  //     </div>
  //        {grabMovies.map((movies) => (
  //         <div className="flex flex-col">
  //              <div className="flex justify-between mb-2 border-b border-b-cyan-400 p-3">
  //               <div className="w-3/4">
  //                   <p className="font-thin ">{movies.title}</p>
  //                   <p className="text-yellow-500">{rateStars(movies.vote_average)}</p>
  //                   {/* <p className="text-sm">{}</p> */}
  //               </div>
  //               <div className="w-1/2">
  //                   <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
  //                   className=""
  //                   />
  //               </div>

  //           </div>
  //         </div>

  //        ))}
  //   </div>
  // )
}
