import { useEffect, useState } from "react";

export default function PlaceHolder(format: string) {
    const [placeholder, setPlaceHolder] = useState<string>("")
    useEffect(() => {
        const handler = (format: string) => {
            if (format === "movie") {
                setPlaceHolder("Search for a movie..")
            } else if (format === "tv") {
                setPlaceHolder("Search for a tv show..")
            } else {
                setPlaceHolder("Actor/Actress name..")
            }
        }

        handler(format)

    }, [format])

    return { placeholder }

}