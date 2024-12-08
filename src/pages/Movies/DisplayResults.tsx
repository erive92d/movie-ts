import { Link } from "react-router-dom";
import { resultProps } from "../../props/props";
import SaveButton from "../../components/SaveButton";
interface DisplayProps {
  data: resultProps[];
}

export default function DisplayResults({ data }: DisplayProps) {
  return (
    <div className="grid grid-cols-6">
      {data?.map((res, index) => (
        <div key={index} className="w-2/4  lg:w-80 p-1 lg:p-5">
          <div className="bg-gray-900">
            <Link to={`/movie/${res.id}`} className="relative">
              <div className="absolute right-0">
                <SaveButton movie={res} />
              </div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${res.poster_path}`}
                className="h-60 w-80"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
