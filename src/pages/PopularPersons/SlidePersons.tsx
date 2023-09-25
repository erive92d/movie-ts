import { useQuery } from "@tanstack/react-query"
import { fetchPeople } from "../../api/api"
import { PersonProps } from "../../props/props"
import NoImage from '../../assets/no_image.png'
// import { Link } from "react-router-dom"

export default function PopularPerson() {
    
    const {data } = useQuery<PersonProps[]>({
        queryKey:["people"],
        queryFn: fetchPeople
    })

  return (
    <div >
        <h1 className="p-2 text-black font-bold text-xl">
            Popular Actors
        </h1>
        
        <div className="flex flex-col h-72 overflow-y-scroll lg:h-96 lg:w-2/5">
            {data && data.map((act) => (
                <div className="mx-1 flex border-b-2 py-1 ">
                    <img src={`${act.profile_path ? `https://image.tmdb.org/t/p/w500/${act.profile_path}` : NoImage}`} alt="poster" className='w-1/4 rounded-full lg:w-1/6' />
                    <div className="mx-auto w-1/2">
                        <p className="text-black font-bold py-2">{act.name}</p>

                        {act.known_for.map((known) => (
                            <p className="truncate">
                                {known.title}
                            </p>
                        ))}
                    </div>
                   
                </div>
            ))}
        </div>
    </div>
  )
}
