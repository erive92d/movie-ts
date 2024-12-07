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
    const deleteFromSave = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const updated = localMovies.filter((mov) => mov.id !== movie.id)
        setLocalMovies(updated)
    }

    return (
        <div>
            {isSaved ? <button onClick={deleteFromSave} className="btn btn-sm btn-error rounded-none rounded-bl-md">-</button> : <button className='btn btn-sm  btn-neutral  rounded-none rounded-bl-md' onClick={handleSave}>+</button>
            }
        </div>
    )
}
