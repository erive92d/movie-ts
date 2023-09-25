
import Search from '../components/SearchComps/Search'
import Landing from './Landing'
import SlidePersons from './PopularPersons/SlidePersons'



export default function Home() {
   

      
  return (
    <div className='min-h-screen'>
          <Search />
          <Landing/>
          <div className=''>
            <SlidePersons />
          </div>
    </div>
  )
}
