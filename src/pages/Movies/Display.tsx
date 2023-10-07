import { useQuery } from '@tanstack/react-query'
import {useState} from 'react'
import { fetchSelect } from '../../api/api'
import Selectors from './Selectors'
import DisplayResults from './DisplayResults'
import UseDebounce from '../../helpers/UseDebounce'

export default function Display() {

    const [selector, setSelector] = useState<string>("top_rated")

    const {debouncedValue, loading} = UseDebounce(selector, 1000)

    const {data } = useQuery({
        queryKey:["select", debouncedValue],
        queryFn: () => {
            if(debouncedValue) {
                return fetchSelect(debouncedValue)
            }
        }
    })

    const handleSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setSelector(event.currentTarget.value)
    }

  return (
    <div>
        <Selectors handleSelect={handleSelect} selector={selector}/>
        {loading ? <h1>Loading..</h1> : <DisplayResults data={data}/>}
    </div>
  )
}
