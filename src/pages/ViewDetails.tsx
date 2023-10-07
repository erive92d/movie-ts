import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { viewMovie } from '../api/api'
import { resultProps } from '../props/props'
import SaveButton from '../components/SaveButton'
export default function ViewDetails() {

    const { format, movieId } = useParams()
    const [details, setDetails] = useState<resultProps | undefined>()

    useEffect(() => {

        if (movieId && format) {
            fetchData(movieId, format)
        }
    }, [movieId, format])

    const fetchData = async (id: string, type: string) => {
        try {

            const response = await viewMovie(id, type)
            if (response.status === 200) {
                setDetails(response.data)
            }
        } catch (error) {
            throw new Error('Could not fetch data')
        }
    }

    return (
        <div className=''>
            {details &&
                <div className='flex flex-col space-y-4 '>
                    {/* <div className='px-2 flex justify-between'>
                        <button className="btn btn-sm" onClick={() => navigate(-1)}>Back</button>
                        
                    </div> */}
                    <div className=' bg-gray-700 text-white'>
                        <div className=''>
                            <img className=" lg:w-1/3 " src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} />
                        </div>
                        <div className='p-4'>
                            <div className='flex items-center gap-2'>
                                
                                <h1 className='font-bold text-2xl font-sans'>{details.title || details.name}</h1>
                                {details.release_date ? <p className='text-xs'>({details?.release_date})</p> : null}
                                
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
                                {details.genres?.slice(0, 2).map((gen) => (
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
                            <div className='text-right'>
                                <SaveButton movie={details} />

                            </div>

                        </div>



                    </div>



                </div>}
        </div>
    )
}
