import {useState, useEffect} from 'react'
import Header from '../components/Header'
import Items from './Items'
import { resultProps } from '../props/props'
import { initialPage } from '../api/api'
import PageHandler from '../components/PageHandler'
import Footer from '../components/Footer'
import SearchMovie from '../components/SearchMovie'
import { searchMovie } from '../api/api'
export default function Home() {
    const [items, setItems] = useState<resultProps[]>([])
    const [selectItem, setSelectItem] = useState<string>("popular")
    const [page, setPage] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)
    const [searchInput, setSearchInput] = useState<string | undefined>("")
    useEffect(() => {
        if(searchInput) {
          
          fetchSearchInput(searchInput, page)
        } if(selectItem) {
          console.log("regular")
          fetchData(selectItem,page)
        }
      },[selectItem,page,searchInput])

      const fetchSearchInput = async (item:string, page:number) => {
        try {
         setLoading(true)
         const response = await searchMovie(item, page)
         if(response.status === 200) {
          setItems(response.data.results)
         }
        } catch (error) {
          throw new Error('Could not fetch data')
        } finally {
          setLoading(false)
        }
      }

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

      const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setSearchInput(event.currentTarget.value)
      }

      console.log(searchInput)
  return (
    <div className=''>
        <Header handleSelector={handleSelector} items={items}/>
        <SearchMovie handleChangeInput={handleChangeInput} />
        <Items loading={loading} items={items} selectItem={selectItem} searchInput={searchInput}/>
        <PageHandler handlePage={handlePage} items={items} page={page}/>
        <Footer />
    </div>
  )
}
