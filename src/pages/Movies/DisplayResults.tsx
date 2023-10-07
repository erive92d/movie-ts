import { resultProps } from "../../props/props"

interface DisplayProps {
    data: resultProps[]
}


export default function DisplayResults({data}:DisplayProps) {

  return (
    <div className="flex flex-wrap">
        {data?.map((res, index) => (
            <div key={index} className="w-2/6 p-2 ">
                <div className="">
                    <img src={`https://image.tmdb.org/t/p/w500/${res.poster_path}`} className="rounded-xl" />
                </div>
            </div>
        ))}
    </div>
  )
}
