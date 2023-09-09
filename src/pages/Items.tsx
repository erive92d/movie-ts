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
    <div className='flex'>
         <motion.div 
                initial={{x:-100, opacity: 0}}
                animate={{x:0, opacity: 1}}
                className='flex flex-wrap 
                lg:p-14 lg:w-2/3
                '>
                    {items && items.map((item) => (
                        <Link to={`/movie/${item.id}`} key={item.id} 
                        className='w-2/4 my-2  p-2 active:scale-110 duration-100
                        lg:w-1/6 lg:m-2 
                        '>
                            <div className=' bg-gradient-to-l from-slate-600h-82 flex flex-col '>
                                <div className='shadow-lg shadow-cyan-700'>
                                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className='h-72 rounded-lg w-full' />
                                </div >
                            </div>
                        </Link>  
                    ))}

        </motion.div>
        {/* <div className='hidden lg:flex w-1/3 bg-blue-700 '>
            <ViewMovie />
        </div> */}
        
    </div>
   
  )
}
