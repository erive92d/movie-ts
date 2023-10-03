
import Search from '../components/SearchComps/Search'
import Landing from './Landing'
import SlidePersons from './PopularPersons/SlidePersons'



export default function Home() {



  return (
    <div className='min-h-screen space-y-5'>
      <Search />
      <Landing />
      <div className=''>
        <SlidePersons />
      </div>
    </div>
  )
}
