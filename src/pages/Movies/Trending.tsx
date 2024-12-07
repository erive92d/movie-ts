import { useQuery } from "@tanstack/react-query"
import { fetchTrending } from "../../api/api"
// import { Link } from "react-router-dom"
import { useState } from "react"
import UseDebounce from "../../helpers/UseDebounce"
import ResultCarousel from "../../components/Carousel"



export default function Trending() {

    const [currentDisplay, setCurrentDisplay] = useState<'movie' | 'tv' | string>('movie')

    const {debouncedValue, loading} = UseDebounce(currentDisplay, 1000)

    const {data } = useQuery({
        queryKey:["trending", debouncedValue],
        queryFn: () => fetchTrending(debouncedValue)
     
    })

    const handleTvOrMovie = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setCurrentDisplay(event.currentTarget.name)
    }

  return (
    <div className="p-2 min-h-screen">
        <div className="flex flex-col py-2 gap-1">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl  ">Trending</h1>
                <div>
                    <button onClick={handleTvOrMovie} name="movie" className={`btn btn-sm duration-200 ${currentDisplay === 'movie' ? "bg-cyan-500 text-white" : ""}`}>Movie</button>
                    <button onClick={handleTvOrMovie} name="tv" className={`btn btn-sm duration-200 ${currentDisplay === 'tv' ? "bg-cyan-500 text-white" : ""}`}>Tv Show</button>
                </div>
            </div>  
        </div>
        {data && <ResultCarousel data={data} loading={loading}/>}
        {/* {currentDisplay === 'movie' ? <Link className="link" to="/feature/movie">See more popular movies</Link> : <Link  className="link" to="/feature/tv">See more popular tv shows</Link>
 }  */}
    </div>
  )
}

