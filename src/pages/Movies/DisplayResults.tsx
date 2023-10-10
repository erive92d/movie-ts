import { Link } from "react-router-dom"
import { resultProps } from "../../props/props"

interface DisplayProps {
    data: resultProps[]
}


export default function DisplayResults({ data }: DisplayProps) {

    return (
        <div className="flex justify-center flex-wrap py-10">
            {data?.map((res, index) => (
                <div key={index} className="w-2/4 lg:w-60 p-1 lg:p-5 ">
                    <Link to={`/movie/${res.id}`} className="">
                        <img src={`https://image.tmdb.org/t/p/w500/${res.poster_path}`} className="" />
                    </Link>
                </div>
            ))}


        </div>
    )
}
