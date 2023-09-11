import { resultProps } from '../props/props'
import { Link } from 'react-router-dom'
interface previewProps {
    previewDetails: resultProps
}

export default function PreviewMovie({previewDetails}:previewProps) {

    console.log(previewDetails)
  return (
    <div>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box text-white shadow-md shadow-cyan-500" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${previewDetails.backdrop_path})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundBlendMode:"soft-light"}}>
              <h3 className="text-lg font-bold">{previewDetails.title}</h3>
              <p className="py-4">{previewDetails.overview}</p> 
              <Link className='btn btn-info' to={`/movie/${previewDetails.id}`}>View</Link>   
          </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
        </div>
    </div>
  )
}
