import { useQuery } from "@tanstack/react-query"
import { resultProps } from "../props/props"
import { fetchTrending } from "../api/api"
import { Link } from "react-router-dom"
import { useState } from "react"
import UseDebounce from "../helpers/UseDebounce"

interface LandingProps {
    data: resultProps[]
    loading: boolean
}

export default function Landing() {

    const [currentDisplay, setCurrentDisplay] = useState<'movie' | 'tv' | string>('movie')

    const { debouncedValue, loading } = UseDebounce(currentDisplay, 1000)

    const { data } = useQuery<resultProps[]>({
        queryKey: ["trending", debouncedValue],
        queryFn: () => fetchTrending(debouncedValue)

    })

    const handleTvOrMovie = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setCurrentDisplay(event.currentTarget.name)
    }

    return (
        <div className="px-2">
            <div className="flex flex-col py-2 gap-1">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Trending</h1>
                    <div>
                        <button onClick={handleTvOrMovie} name="movie" className={`btn btn-sm  duration-200 ${currentDisplay === 'movie' ? "bg-cyan-500 text-white" : ""}`}>Movie</button>
                        <button onClick={handleTvOrMovie} name="tv" className={`btn btn-sm duration-200 ${currentDisplay === 'tv' ? "bg-cyan-500 text-white" : ""}`}>Tv Show</button>
                    </div>
                </div>
            </div>
            {data && <ResultData data={data} loading={loading} />}
            {currentDisplay === 'movie' ? <Link className="link" to="/feature/movie">See more movies</Link> : <Link className="link" to="/feature/tv">See more tv shows</Link>
            }
        </div>
    )
}

function ResultData({ data, loading }: LandingProps) {

    if (loading) return (
        <div className="text-center ">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    )

    return (
        <div className="carousel space-x-4 ">
            {data ? data.map((movie) => (
                <Link to={`/movie/${movie.id}`} className="carousel-item w-2/5 lg:w-1/4 " key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="" />
                </Link>
            )) : <span className="loading loading-infinity loading-lg"></span>}
        </div>
    )
}
