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

    useEffect(() => {
        initialPage(selectItem, page)
        .then(data => setItems(data))
      },[selectItem,page])

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
        <Items items={items} />
        <PageHandler handlePage={handlePage} items={items} page={page}/>
    </div>
  )
}
