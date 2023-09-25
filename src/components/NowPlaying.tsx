import { useQuery } from "@tanstack/react-query"
import { fetchPeople } from "../api/api"

export default function NowPlaying() {

    const {data} = useQuery({
        queryKey:["providers"],
        queryFn: fetchPeople
    })

    console.log(data)

//    const nowPlaying = FetchDatas("now_playing")?.slice(0,10)
    
//   return (
//     <div className="flex flex-col w-96">
//         <h1>Now playing</h1>
//         {nowPlaying && nowPlaying.map((movie) => (
//             <div className="m-1">
//                 <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="h-40"/>
//                 <h1>{movie.title}</h1>
//             </div>
//         ))}
//     </div>
//   )
}
