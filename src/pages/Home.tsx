import {useState, useEffect} from 'react'
import Header from '../components/Header'
import Items from './Items'
import { resultProps } from '../props/props'
import { initialPage } from '../api/api'
import PageHandler from '../components/PageHandler'
import SearchMovie from '../components/SearchMovie'



export default function Home() {
    const [items, setItems] = useState<resultProps[]>([])
    const [selectItem, setSelectItem] = useState<string>("popular")
    const [page, setPage] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)
    const [hidePage, setHidePage] = useState<boolean>(false)
    useEffect(() => {
       if(selectItem) {
          fetchData(selectItem,page)
        }
      },[selectItem,page])

      const fetchData = async (item:string, page:number) => {
        try {
         setLoading(true)
         const response = await initialPage(item, page)
         if(response.status === 200) {
          setHidePage(false)
          setItems(response.data.results)
         }
        } catch (error) {
          throw new Error('Could not fetch data')
        } finally {
          setLoading(false)
        }
      }


      const handleSelector = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setSelectItem(event.currentTarget.name)
        setPage(1)
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
    <div className='lg:w-2/3 lg:mx-auto lg:bg-black'>
          <Header handleSelector={handleSelector} items={items} selectItem={selectItem}/>
          <SearchMovie />
          <Items loading={loading} items={items} selectItem={selectItem}/>
          {hidePage ? null : <PageHandler handlePage={handlePage} items={items} page={page}/>
  }
 
       
    </div>
  )
}
