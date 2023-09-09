// import { rateStars } from '../helpers/rating'
import { Link } from 'react-router-dom'
import { resultProps } from '../props/props'
import LoadingComp from '../components/LoadingComp'
import {motion} from 'framer-motion'
interface itemProps {
    items:resultProps[]
    loading:boolean
}



export default function Items({items, loading}:itemProps ) {

if(loading) return <LoadingComp />
  return (
    <motion.div 
    initial={{x:-100, opacity: 0}}
    animate={{x:0, opacity: 1}}
    className='flex flex-wrap '>
        {items && items.map((item) => (
            <Link to={`/movie/${item.id}`} key={item.id} className='w-2/4 my-2  p-2 active:scale-110 duration-100'>
                <div className=' bg-gradient-to-l from-slate-600 border border-cyan-500 h-82 flex flex-col '>
                    <div className='p-2 h-9 overflow-hidden'>
                        <h1 className='text-cyan-400 '>{item.title}</h1>
                    </div>
                    {/* <div>
                        <p className='text-yellow-400'>{rateStars(item.vote_average)}</p>
                    </div> */}
                    <div className=''>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className='h-42 rounded-b w-full' />
                    </div >
                </div>
                
            </Link>  
        ))}
     
    </motion.div>
  )
}
