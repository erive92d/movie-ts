import { useQuery } from '@tanstack/react-query'
import { getComingSoon } from '../../api/api'
import ResultCarousel from '../../components/Carousel'

export default function ComingSoon() {

    const {data } = useQuery({
        queryKey:["upcoming"],
        queryFn: getComingSoon
    })

  return (
    <div className=' p-2'>
        <h1 className='text-lg  font-bold'>New and upcoming movies..</h1>
        <ResultCarousel data={data} />
    </div>
  )
}
