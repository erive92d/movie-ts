import { Link, useParams } from "react-router-dom"
import { fetchFeatures } from "../api/api"
import { useEffect, useState } from "react"
import NoImage from "../assets/no_image.png"
import { resultProps } from "../props/props"
import CatList from "../components/Categories/CatList"
export default function ViewFeature() {
    const { feat } = useParams()

    const [page, setPage] = useState<number>(1)

    const [result, setResult] = useState<resultProps[]>([])

    useEffect(() => {
        if (feat) {
            fetchFeatures(feat, page)
                .then(data => setResult(data))
        }
    }, [feat, page])

    const handlePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        if (event.currentTarget.name === "next") {
            setPage(prev => prev + 1)
        } else {
            setPage(prev => prev - 1)
        }
    }



    return (
        <div>
            <div>
                {/* <CatList format={feat} /> */}
            </div>
            <div className="flex flex-wrap">
                {result && result.map((movie) => (
                    <div className="w-1/2 p-2">
                        <Link className="" to={`/movie/${movie.id}`}>
                            <img src={`${movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : NoImage}`} alt="poster" className='' />
                        </Link>
                    </div>
                ))}
            </div>
            <div className="join grid grid-cols-2 lg:w-1/3 lg:mx-auto">
                <button name="back" onClick={handlePage} className={`${page === 1 ? "btn-disabled " : ""}join-item btn btn-outline text-white`}>Previous page</button>
                <button name="next" onClick={handlePage} className="join-item btn btn-outline text-white">Next</button>
            </div>
        </div>
    )
}
