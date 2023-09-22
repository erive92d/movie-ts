// import { rateStars } from '../helpers/rating'
// import { Link } from 'react-router-dom'
import { resultProps } from '../props/props'
import LoadingComp from '../components/LoadingComp'
import {motion} from 'framer-motion'
import noImage from '../assets/no_image.png'
import { fadeInAnimationVariants } from '../helpers/animationVariants'
import { useState} from 'react'
import PreviewMovie from '../components/PreviewMovie'

interface itemProps {
    items:resultProps[]
    loading:boolean
    selectItem:string
    searchInput?: string
}



export default function Items({items, loading}:itemProps ) {
    const [previewDetails, setPreviewDetails] = useState<resultProps | undefined>()
    
    
   const handlePreview = ( items:resultProps | undefined) => {
    // event.preventDefault()
    if(items) {
        setPreviewDetails(items)
    }
   }

//    console.log(previewDetails)
  if(loading) return <LoadingComp />
  return (
    <div className='flex flex-col' >
         <motion.div 
             className='flex flex-wrap lg:justify-center lg:p-5
            '>
            {items && items.map((item, index) => (
                 <div  key={item.id} 
                    className='w-2/4 my-2  p-2 duration-100
                    md:w-1/4
                    lg:w-1/6 lg:m-2 lg:hover:scale-110
                    '>
                    
                    <motion.div
                        variants={fadeInAnimationVariants}
                         initial="initial"
                        whileInView="animate"
                        viewport={{ once: true}}
                         custom={index}
                        className=' bg-gradient-to-l from-slate-600 h-82 flex flex-col hover:shadow-lg hover:shadow-cyan-700'>
                        <div  >
                            <label htmlFor="my_modal_7" className="" onClick={() => handlePreview(item)}>
                                 <img src={`${item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : noImage}`} alt="poster" className='h-72 w-full' />
                             </label>
                        </div >

                    </motion.div>
                            
                 </div>  
                    ))}         

                    {previewDetails && <PreviewMovie previewDetails={previewDetails}/>   }                                    
        </motion.div>
       
        
    </div>
   
  )
}
