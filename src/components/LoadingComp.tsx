import ReactLoading from 'react-loading'

export default function LoadingComp() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
       <ReactLoading type="cylon" 
        height={100} width={100} />
    </div>
   
  )
}
