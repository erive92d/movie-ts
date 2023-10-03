
import Search from '../components/SearchComps/Search'
import Display from './Movies/Display'
import Trending from './Movies/Trending'



export default function Home() {
   

      
  return (
    <div className='min-h-screen'>
          <Search />
          <Trending/>
          <div className=''>
            <Display />
          </div>
    </div>
  )
}
