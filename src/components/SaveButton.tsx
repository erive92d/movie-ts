import { getMovies, saveMovie } from "../localstorage/saveMovies"
import { resultProps } from "../props/props"
import { useState, useEffect } from 'react'
import CheckSave from "../helpers/CheckSave"
interface SaveProps {
    movie: resultProps
}

export default function SaveButton({ movie }: SaveProps) {
    const [localMovies, setLocalMovies] = useState<resultProps[]>(getMovies())
    useEffect(() => {
        saveMovie(localMovies)
    }, [localMovies, movie])

    const { isSaved } = CheckSave(movie.id, localMovies)

    const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setLocalMovies([...localMovies, movie])
    }

    return (
        <div>
            {isSaved ? <button className="btn btn-sm btn-disabled">+</button> : <button className='btn btn-sm  btn-neutral  rounded-none' onClick={handleSave}>+</button>
            }

        </div>
    )
}
