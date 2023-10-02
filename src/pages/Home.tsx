
import Search from '../components/SearchComps/Search'
import ComingSoon from './Movies/ComingSoon'
import Trending from './Movies/Trending'
import SlidePersons from './PopularPersons/SlidePersons'



export default function Home() {
   

      
  return (
    <div className='min-h-screen'>
          <Search />
          <Trending/>
          <div className=''>
            <SlidePersons />
            <ComingSoon />
          </div>
    </div>
  )
}
