import { resultProps } from "../props/props"

export const saveMovie = (movie:resultProps[]) => {
    if(movie.length) {
        localStorage.setItem("movie", JSON.stringify(movie))
    } else {
        localStorage.removeItem("saved_ids");
    }
}

export const getMovies = () => {
    const grabFromLocalStorage:string | null = localStorage.getItem("movie") 
    if(!grabFromLocalStorage) {
        return []
    }
    return JSON.parse(grabFromLocalStorage)
}