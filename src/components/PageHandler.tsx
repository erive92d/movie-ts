
import { resultProps } from '../props/props'


interface pageProps {
    handlePage:React.MouseEventHandler<HTMLButtonElement>
    items: resultProps[]
    page:number
}



export default function PageHandler({handlePage, page}:pageProps) {

  return (
    <div className="join grid grid-cols-2 lg:w-1/3 lg:mx-auto">
        <button name="back"  onClick={handlePage} className={`${page === 1 ? "btn-disabled " : ""}join-item btn btn-outline`}>Previous page</button>
        <button name="next" onClick={handlePage} className="join-item btn btn-outline">Next</button>
    </div>
    // <div className='text-cyan-500 p-2 font-bold flex justify-around'>
    //     <div className={page === 1 ? "hidden" : ""}>
    //         <button name="back"  onClick={handlePage}>Back</button>
    //     </div>
        
    //     <div>
    //         <button name="next" onClick={handlePage}>Next</button>
    //     </div>
   
    // </div>
  )
}
