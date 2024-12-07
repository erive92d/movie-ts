import { Link } from "react-router-dom"
import { resultProps } from "../../props/props"
import SaveButton from "../../components/SaveButton"
interface DisplayProps {
    data: resultProps[]
}


export default function DisplayResults({ data }: DisplayProps) {
    return (
        <div className="flex justify-center flex-wrap py-10">
            {data?.map((res, index) => (
                <div key={index} className="w-2/4 lg:w-60 p-1 lg:p-5">
                    <div className="bg-gray-900">
                        <div className="relative">
                            <div className="absolute right-0">
                                <SaveButton movie={res} />
                            </div>
                            <img src={`https://image.tmdb.org/t/p/w500/${res.poster_path}`} className="" />

                        </div>
                        <div className="p-2">
                            <div className="flex justify-between py-2">

                                <Link to={`/movie/${res.id}`} className="truncate text-white hover:text-red-500">
                                    {res.title}
                                </Link>

                            </div>
                            <div className="flex justify-between text-sm text-gray-400">
                                {res.release_date.split('').slice(0, 4).join("")}
                                <p><span className="text-yellow-500">★</span>{res.vote_average}</p>

                            </div>


                        </div>
                    </div>

                </div>
            ))}


        </div>
    )
}
