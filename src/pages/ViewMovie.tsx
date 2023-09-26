import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { viewMovie } from '../api/api'
import { resultProps } from '../props/props'
import { useNavigate } from 'react-router-dom'
import NewSaveButton from '../components/NewSaveButton'
export default function ViewMovie() {

    const navigate = useNavigate()

    const { format, movieId } = useParams()
    const [details, setDetails] = useState<resultProps | undefined>()

    useEffect(() => {

        if (movieId) {
            fetchData(movieId, format)
        }
    }, [movieId])

    const fetchData = async (id: string, format: string) => {
        try {

            const response = await viewMovie(id, format)
            if (response.status === 200) {
                setDetails(response.data)
            }
        } catch (error) {
            throw new Error('Could not fetch data')
        }
    }
    return (
        <div className='py-4'>
            {details &&
                <div className='flex flex-col space-y-4 '>
                    <div className='px-2 flex justify-between'>
                        <button className="btn btn-sm" onClick={() => navigate(-1)}>Back</button>
                        <NewSaveButton movie={details} />
                    </div>
                    <div className='border-2 bg-white border-gray-400 w-5/6 p-3 mx-auto rounded-xl'>
                        <div className=''>
                            <img className="mx-auto rounded-xl p-2 w-1/2 lg:w-1/3" src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} />
                        </div>
                        <div className='p-4'>
                            <div className='flex items-center gap-2'>
                                <h1 className='font-bold text-2xl font-sans'>{details.title}</h1>
                                <p className='text-xs'>({details.release_date})</p>
                            </div>
                            <div className='flex gap-2 text-sm'>
                                <p>{details.adult ? "R" : "PG-13"}</p>
                                <p>{details.runtime}m</p>
                            </div>
                        </div>
                        <div className='px-4'>
                            <p className='italic font-light'>{details.tagline}</p>
                        </div>
                        <div className='p-4 '>
                            <div className='flex items-center gap-2 overflow-x-auto'>
                                <h1 className='text-md font-bold'>Genre:</h1>
                                {details.genres.slice(0, 2).map((gen) => (
                                    <p className='text-md '>{gen.name}</p>
                                ))}
                            </div>
                            <div className='flex items-center gap-2'>
                                <h1 className='text-md font-bold'>Rating:</h1>
                                {Math.floor(details.vote_average)} / 10 <span className='text-yellow-500'>★</span>
                            </div>
                            <div className='py-4'>
                                <h1 className='font-bold text-center'>Overview</h1>
                                <p>{details.overview}</p>
                            </div>

                        </div>

                        {/* <div className='p-2 space-y-1 '>
                            <h1 className='font-bold text-4xl'>{details.title}</h1>
                            <p className='font-thin text-sm italic'>{details.tagline}</p>
                            <div className='flex items-center justify-between'>
                                <p className='text-yellow-500 text-2xl'>{rateStars(details.vote_average)}</p>
                                <p className=' font-extralight'>{details.release_date}</p>
                            </div>
                        </div>

                        <div className='flex lg:flex-col-reverse'>
                            <div className='flex flex-col justify-between w-1/2 p-2 '>
                                <p className='italic font-thin text-md h-52 overflow-auto lg:overflow-hidden'>{details.overview}</p>
                                <p>{details.runtime}m</p>
                            </div>
                            <img className="rounded w-1/2 p-2 lg:w-1/3" src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} />
                        </div>
                        <div className='flex space-x-3 italic font-thin p-2'>
                            {details.genres.map((gen) => (
                                <p>{gen.name}</p>
                            ))}
                        </div> */}

                    </div>



                </div>}
        </div>
    )
}
