import { resultProps } from '../props/props'
import { getMovies, saveMovie } from '../localstorage/saveMovies'
import {useState, useEffect} from 'react'
import SaveButton from './SaveButton'
import { rateStars } from '../helpers/rating'
interface previewProps {
    previewDetails: resultProps
}

export default function PreviewMovie({previewDetails}:previewProps) {

  const [saveItem, setSaveItem] = useState<resultProps[]>(getMovies())

  useEffect(() => {
    saveMovie(saveItem)
  },[saveItem])

  const handleSave = (event: React.MouseEvent<HTMLButtonElement>, items:resultProps) => {
    event.preventDefault()
    if(items) {
      setSaveItem([...saveItem, items])
    }
  }
  

  return (
    <div className=''>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal">
          <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${previewDetails.backdrop_path})`}} className="modal-box text-slate-200 shadow-md shadow-cyan-500 bg-cover bg-blend-overlay" >
              <div className='p-2 space-y-1'>
                    <h1 className='font-bold text-2xl'>{previewDetails.title}</h1>
                    <p className='font-thin text-sm italic'>{previewDetails.tagline}</p>
                    <div className='flex items-center justify-between'>
                      <p className='text-yellow-500 text-2xl'>{rateStars(previewDetails.vote_average)}</p>
                      <p className=' font-extralight'>{previewDetails.release_date}</p>
                    </div>
                    <div className='flex lg:flex-col-reverse'>
                        
                        <img className="rounded w-2/3 mx-auto lg:w-1/3" src={`https://image.tmdb.org/t/p/w500/${previewDetails.poster_path}`} />
                    </div>
              </div>
                      <p className="py-4">{previewDetails.overview}</p> 
              {/* <Link className='btn btn-info' to={`/movie/${previewDetails.id}`}>View</Link>    */}
              <div className='text-center'>
                <SaveButton previewDetails={previewDetails} handleSave={handleSave} saveItem={saveItem} />
              </div>
              </div>
             
          <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
        </div>
    </div>
  )
}
