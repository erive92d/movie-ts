// import { rateStars } from '../helpers/rating'
import { Link } from 'react-router-dom'
import { resultProps } from '../props/props'
import LoadingComp from '../components/LoadingComp'
import {motion} from 'framer-motion'
import noImage from '../assets/no_image.png'
import { fadeInAnimationVariants } from '../helpers/animationVariants'
import { useEffect, useState } from 'react'
import { pageBanner } from '../helpers/pageTitle'
interface itemProps {
    items:resultProps[]
    loading:boolean
    selectItem:string
    searchInput?: string
}



export default function Items({items, loading, selectItem, searchInput}:itemProps ) {
    const [banner, setBanner] = useState<string | undefined>("")
    useEffect(() => {
                const pageTitle = pageBanner(selectItem)
            setBanner(pageTitle)

    },[selectItem])
    
  if(loading) return <LoadingComp />

  return (
    <div className='flex flex-col'>
        <div className=''>
            {searchInput ? searchInput : <p className='text-2xl p-2'>{banner}</p>}
        </div>
         <motion.div 
               
                className='flex flex-wrap 
                lg:p-14 lg:w-2/3
                '>
                    {items && items.map((item, index) => (
                        <Link to={`/movie/${item.id}`} key={item.id} 
                        className='w-2/4 my-2  p-2 active:scale-110 duration-100
                        lg:w-1/6 lg:m-2 
                        '>
                            <motion.div
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true}}
                            custom={index}
                            className=' bg-gradient-to-l from-slate-600h-82 flex flex-col '>
                                <div className='shadow-lg shadow-cyan-700'>
                                    <img src={`${item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : noImage}`} alt="poster" className='h-72 rounded-lg w-full' />
                                </div >
                            </motion.div>
                        </Link>  
                    ))}
        </motion.div>
        {/* <div className='hidden lg:flex w-1/3 bg-blue-700 '>
            <ViewMovie />
        </div> */}
        
    </div>
   
  )
}
