import { useEffect, useState } from "react"
import { getPopulars } from "../api/api"
import { resultProps } from "../props/props"
import { Link } from "react-router-dom"
interface genreProp{
    genre: number
}

export default function GenreRelated({genre}:genreProp) {

    const [genreItems, setGenreItems] = useState<resultProps[]>([])

    useEffect(() => {
        getByGenre(genre)
    },[genre])

    const getByGenre = async (gen:number) => {
        try {
            const response = await getPopulars()
            if(response.status === 200) {
                const result = response.data.results
                const newArray = result.filter((res:resultProps) => {
                    if(res.genre_ids) {
                       return res.genre_ids[0] === gen
                    } if(res.genres) {
                       return  res.genres[0].id === gen
                    }
                }
                )
                setGenreItems(newArray)
               
            }

        } catch (error) {
            throw new Error ("Could not fetch")
        }
    }



  return (
    <div className="">
        <h1 className="p-2">Recommended</h1>
        <div className="carousel carousel-center ">
            {genreItems && genreItems.map((item) => (
            <Link to={`/movie/${item.id}`} key={item.id} className="carousel-item mx-2">
                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className=" h-52" alt="Pizza" />
            </Link> 
   ))
 }  </div>
        
    </div>
  )
}
