import { PersonProps } from '../../props/props'
import { Link } from 'react-router-dom'
import NoImage from '../../assets/no_image.png'

interface ResultPerson {
    personResult: PersonProps[]
}


export default function SearchResultPeople({personResult}:ResultPerson) {

    console.log(personResult)
    return (
        <div className="bg-slate-100 w-3/4 lg:w-full absolute top-16 rounded-lg px-3 max-h-72 overflow-auto ">
          {personResult && personResult.map((person) => (
            <Link className="flex gap-2 border-b-2 border-b-cyan-500 py-1" to={`/movie/${person.id}`} key={person.id}>
              <img src={`${person.profile_path ? `https://image.tmdb.org/t/p/w500/${ person.profile_path} ` : NoImage}`} className="w-10" alt="" />
              <h1 className="text-black">{ person.name}</h1>

            </Link>
          ))}
        </div>
      )
}
