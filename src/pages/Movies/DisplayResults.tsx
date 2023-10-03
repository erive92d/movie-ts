import { Link } from "react-router-dom"
import { resultProps } from "../../props/props"

interface DisplayProps {
    data: resultProps[]
}


export default function DisplayResults({data}:DisplayProps) {

  return (
    <div className="flex flex-wrap">
        {data?.map((res, index) => (
            <div key={index} className="w-2/6 p-2 ">
                <Link to={`/movie/${res.id}`} className="">
                    <img src={`https://image.tmdb.org/t/p/w500/${res.poster_path}`} className="rounded-xl" />
                </Link>
            </div>
        ))}
    </div>
  )
}
