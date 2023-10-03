import { useQuery } from '@tanstack/react-query'
import {useState} from 'react'
import { fetchSelect } from '../../api/api'
import Selectors from './Selectors'
import DisplayResults from './DisplayResults'
import UseDebounce from '../../helpers/UseDebounce'
import PageHandler from '../../components/PageHandler'

export default function Display() {

    const [selector, setSelector] = useState<string>("top_rated")
    
    const [page, setPage] = useState<number>(1)

    const {debouncedValue, loading} = UseDebounce(selector, 1000)

    const {data } = useQuery({
        queryKey:["select", debouncedValue, page],
        queryFn: () => {
            if(debouncedValue) {
                return fetchSelect(debouncedValue,page)
            }
        }
    })

    const handleSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setSelector(event.currentTarget.value)
    }

    const handlePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        if(event.currentTarget.name === "next") {
          setPage(prev => prev + 1)
        } else {
          setPage(prev => prev - 1)
        }
      }

  return (
    <div>
        <Selectors handleSelect={handleSelect} selector={selector}/>
        {loading ? <span className="loading loading-bars loading-lg"></span>
 : <DisplayResults data={data}/>}
        <PageHandler handlePage={handlePage} page={page}/>
    </div>
  )
}
