import {useState, useEffect} from 'react'
import Header from '../components/Header'
import Items from './Items'
import { resultProps } from '../props/props'
import { initialPage } from '../api/api'
import Selector from '../components/Selector'
import PageHandler from '../components/PageHandler'

export default function Home() {
    const [items, setItems] = useState<resultProps[]>([])
    const [selectItem, setSelectItem] = useState<string>("popular")
    const [page, setPage] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        fetchData(selectItem,page)
      },[selectItem,page])

      const fetchData = async (item:string, page:number) => {
        try {
          setLoading(true)
          const response = await initialPage(item, page)
          if(response.status === 200) {
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
    <div className=''>
        <Header/>
        <Selector handleSelector={handleSelector} items={items} selectItem={selectItem}/>
        <Items loading={loading} items={items} />
        <PageHandler handlePage={handlePage} items={items} page={page}/>
    </div>
  )
}
