import { resultProps } from "../props/props"

export const previewMovie = (movie:resultProps) => {
    const saveToStorage = localStorage.saveItem("movie", JSON.stringify(movie))
    return saveToStorage
}