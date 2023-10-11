// import { rateStars } from "../helpers/rating"
import DeleteButton from "../../components/DeleteButton"
import { getMovies, saveMovie } from "../../localstorage/saveMovies"
import { resultProps } from "../../props/props"
import { useState, useEffect } from 'react'
import { rateStars } from "../../helpers/rating"
import NoImage from '../../assets/no_image.png'
export default function SavedMovies() {

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
    <div className="bg-black p-2 min-h-screen">
      <div className="flex justify-between items-center p-2">
        <p className="text-lg btn btn-active">Watch Later</p>
      </div>
      <div className="
        md:flex md:flex-wrap
        ">
        {grabMovies.length === 0 ? <h1 className="text-center text-3xl">No movies saved..</h1> : grabMovies.map((movies) => (
          <div className="card w-96 bg-black shadow-xl m-2
            lg:w-64
            ">

            <div className="flex">
              <div className="flex gap-5">
                <img src={movies.poster_path ? `https://image.tmdb.org/t/p/w500/${movies.poster_path}` : NoImage} className="w-1/3" />
                <div className="w-1/3">
                  <h2 >
                    {movies.title}
                  </h2>
                  <p className="text-yellow-400">
                    {rateStars(movies.vote_average)}
                  </p>
                </div>

              </div>
              <div className="card-actions justify-end">
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
