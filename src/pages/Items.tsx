// import { rateStars } from '../helpers/rating'
import { Link } from 'react-router-dom'
import { resultProps } from '../props/props'

interface itemProps {
    items:resultProps[]
}



export default function Items({items}:itemProps ) {

    if(!items) return <h1>Loading...</h1>

  return (
    <div className='flex flex-wrap '>
        {items && items.map((item) => (
            <Link to={`/movie/${item.id}`} key={item.id} className='w-2/4 my-2  p-2 active:scale-110 duration-100'>
                <div className=' bg-gradient-to-l from-slate-700  h-82 flex flex-col '>
                    <div className='p-2 h-9 overflow-hidden'>
                        <h1 className='text-white '>{item.title}</h1>
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
     
    </div>
  )
}
