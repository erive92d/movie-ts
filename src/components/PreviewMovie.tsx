import { resultProps } from '../props/props'
import { Link } from 'react-router-dom'
import { getMovies, saveMovie } from '../localstorage/saveMovies'
import {useState, useEffect} from 'react'
import SaveButton from './SaveButton'
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
    <div>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box text-slate-200 bg-blend-overlay shadow-md shadow-cyan-500" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${previewDetails.backdrop_path})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
              <div className='text-right'>
                <SaveButton previewDetails={previewDetails} handleSave={handleSave} saveItem={saveItem} />
              </div>
              <h3 className="text-lg font-bold">{previewDetails.title}</h3>
              <p className="py-4">{previewDetails.overview}</p> 
              <Link className='btn btn-info' to={`/movie/${previewDetails.id}`}>View</Link>   
          </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
        </div>
    </div>
  )
}
