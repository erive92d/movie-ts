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

  // console.log(previewDetails)
  

  return (
    <div className=''>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal">
          <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${previewDetails.backdrop_path})`}} className="modal-box text-slate-200 shadow-md shadow-cyan-500 bg-cover bg-blend-soft-light" >
              <div className='p-2 space-y-1'>
                    <h1 className='font-bold text-2xl'>{previewDetails.title}</h1>
                    <p className='font-thin text-sm italic'>{previewDetails.tagline}</p>
                    <div className='flex items-center justify-between'>
                    </div>               
                    <div>
                        <table className='table'>
                          <thead>
                            <tr>
                              <th>Rating</th>
                              <th>Release Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                                <td  className='text-yellow-500 text-2xl'>{rateStars(previewDetails.vote_average)}</td>
                                <td>{previewDetails.release_date} </td> 
                            </tr>
                          </tbody>
                        </table>
                    </div>
              </div>
                      <p className="py-4">{previewDetails.overview}</p> 
              <div className='text-center'>
                <SaveButton previewDetails={previewDetails} handleSave={handleSave} saveItem={saveItem} />
              </div>
              </div>
             
          <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
        </div>
    </div>
  )
}
