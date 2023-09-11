import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { viewMovie } from '../api/api'
import { resultProps } from '../props/props'
import { rateStars } from '../helpers/rating'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import GenreRelated from '../components/GenreRelated'
export default function ViewMovie() {

    const navigate = useNavigate()

    const { movieId } = useParams()
    const [details, setDetails] = useState<resultProps | undefined>()

    useEffect(() => {
       
        if(movieId) {
            fetchData(movieId)
        }
    },[movieId])

    const fetchData = async (id:string) => {
        try {
         
          const response = await viewMovie(id)
          if(response.status === 200) {
            setDetails(response.data)
          }
        } catch (error) {
            throw new Error('Could not fetch data')
        }
      }
      console.log(details)
  return (
    <motion.div 
        initial={{opacity: 0, y:-100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        viewport={{once: true}}
        className='h-screen flex flex-col bg-gradient-to-b from-slate-700 text-white space-y-10 p-4
        lg:p-10 lg:w-2/3 lg:mx-auto lg:h-full
        '  >
           {details && 
           <div className='flex flex-col space-y-4'>
            <div className='flex justify-between'>
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={() => navigate('/')}>Home</button>
            </div>
           
            <div className='p-2 space-y-1'>
                <h1 className='font-bold text-4xl'>{details.title}</h1>
                <p className='font-thin text-sm italic'>{details.tagline}</p>
                <div>
                <p className='text-yellow-500 text-2xl'>{rateStars(details.vote_average)}</p>
                </div>
            </div>
            
            <div className='flex lg:flex-col-reverse'>
                    <div className='flex flex-col justify-between w-1/2 p-2 '>
                        <p className='italic font-thin text-md h-52 overflow-scroll lg:overflow-hidden'>{details.overview}</p>
                        <p>{details.runtime}m</p>
                    </div>
                    <img className="rounded w-1/2 p-2 lg:w-1/3" src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} />
            </div>
            <div className='flex space-x-3 italic font-thin p-2'>
                  {details.genres.map((gen) => ( 
                     <p>{gen.name}</p>
            ))}              
            </div>
            <div>
                <GenreRelated genre={details.genres[0].id}/>
            </div>
           </div>}
    </motion.div>
    )
}
