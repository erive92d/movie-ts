
import Landing from './Landing'
import SearchComp from './Movies/SearchComp'
import SlidePersons from './PopularPersons/SlidePersons'



export default function Home() {
   

      
  return (
    <div className='min-h-screen'>
          <SearchComp />
          <Landing/>
          <div className=''>
            <SlidePersons />
          </div>
    </div>
  )
}
