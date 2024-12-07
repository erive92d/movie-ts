import { useState, useEffect } from 'react'
import { resultProps } from '../props/props'

export default function CheckSave(movieId: number, localMovies: resultProps[]) {
    const [isSaved, setIsSaved] = useState<boolean>(false)

    useEffect(() => {
        if (localMovies.some((movie) => movie.id === movieId)) {
            setIsSaved(true)
        } else {
            setIsSaved(false)

        }
    }, [movieId, localMovies])
    console.log(isSaved)

    return { isSaved }

}
