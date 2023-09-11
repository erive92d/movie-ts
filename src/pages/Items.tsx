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

   console.log(previewDetails)
  if(loading) return <LoadingComp />
  return (
            <div className='flex flex-col'>
                <motion.div 
                className='flex flex-wrap 
                lg:p-14 lg:w-2/3 lg:mx-auto
                '>
                    {items && items.map((item, index) => (
                        <div  key={item.id} 
                        className='w-2/4 my-2  p-2 duration-100
                        lg:w-1/6 lg:m-2 lg:hover:scale-110
                        '>
                            <motion.div
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true}}
                            custom={index}
                            className=' bg-gradient-to-l from-slate-600h-82 flex flex-col '>
                                <div className='shadow-lg shadow-cyan-700' >
                                    <label htmlFor="my_modal_7" className="" onClick={() => handlePreview(item)}>
                                        <img src={`${item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : noImage}`} alt="poster" className='h-72 rounded-lg w-full' />
                                    </label>
                                </div >

                            </motion.div>
                            
                        </div>  
                    ))}         

                        {previewDetails && <PreviewMovie previewDetails={previewDetails}/>   }
                              

                   
                </motion.div>
        {/* <div className='hidden lg:flex w-1/3 bg-blue-700 '>
            <ViewMovie />
        </div> */}
        
    </div>
   
  )
}
