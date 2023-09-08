import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { viewMovie } from '../api/api'
import { resultProps } from '../props/props'
import { rateStars } from '../helpers/rating'
import { useNavigate } from 'react-router-dom'

export default function ViewMovie() {

    const navigate = useNavigate()

    const { movieId } = useParams()
    const [details, setDetails] = useState<resultProps>()
    useEffect(() => {
        if(movieId) {
            viewMovie(movieId)
            .then(data => setDetails(data))
        }
    },[])

    if(!details) {
        return <h1>Loading...</h1>
    }
    // console.log(details)

  return (
    <div className='h-screen flex flex-col bg-gradient-to-b from-slate-700 text-white space-y-10 p-4'  >
            <button onClick={() => navigate(-1)}>Back</button>
            <div className='p-2 space-y-1'>
                <h1 className='font-bold text-4xl'>{details.title}</h1>
                <p className='font-thin text-sm italic'>{details.tagline}</p>
                <div>
                <p className='text-yellow-500 text-2xl'>{rateStars(details.vote_average)}</p>
                </div>
            </div>
            
            <div className='flex '>
                    <div className='flex flex-col space-y-3 w-1/2 p-2'>
                        <p className='italic font-thin text-md'>{details.overview}</p>
                        <p>{details.runtime}m</p>
                    </div>
                    <img className="rounded w-1/2 p-2" src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} />
            </div>
            <div className='flex space-x-3 italic font-thin p-2'>
                            {details.genres.map((gen) => ( 
                            <p>{gen.name}</p>
                        ))}                  
            </div>
    </div>
    )
}
