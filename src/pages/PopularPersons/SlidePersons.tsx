import { useQuery } from "@tanstack/react-query"
import { fetchPeople } from "../../api/api"
import ResultCarousel from "../../components/Carousel"
// import { Link } from "react-router-dom"


export default function PopularPerson() {

    const { data } = useQuery<PersonProps[]>({
        queryKey: ["people"],
        queryFn: fetchPeople
    })

    return (
        <div className=" my-2">
            <h1 className="p-2  font-bold text-xl">
                Popular Actors
            </h1>

            <div className="flex flex-col h-72 overflow-y-scroll lg:h-96 lg:w-1/2">
                {data && data.map((act, index) => (
                    <div className="mx-1 flex border-b-2 py-1 ">
                        <img src={`${act.profile_path ? `https://image.tmdb.org/t/p/w500/${act.profile_path}` : NoImage}`} alt="poster" className='w-1/5 rounded-full lg:w-1/6' />
                        <div className="mx-auto w-1/2" key={index}>
                            <p className=" font-bold py-2">{act.name}</p>

                            {act.known_for.map((known) => (
                                <p className="truncate">
                                    {known.title}
                                </p>
                            ))}
                        </div>

                    </div>
                ))}
            </div> */}
        </div>
    )
}
