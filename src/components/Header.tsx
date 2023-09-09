// import logo from '../assets/Blockbuster_logo.png'

// interface handleClickProp {
//   onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }

// import {useState, useEffect} from 'react'
// import { pageBanner } from '../helpers/pageTitle'

export default function Header() {
  // console.log(selectItem)
  // const [currentTitle, setCurrentTitle] = useState<string>(selectItem)

  // useEffect(() => {
  //   const page:string | undefined = pageBanner(selectItem)
   
  // },[selectItem])
  // console.log(currentTitle)

  return (
    <div className='flex justify-between text-cyan-400 p-2 items-center bg-gradient-to-b  from-slate-600 to-black  font-bold'>
        <div className="">
            {/* <img src={logo} width={100}/>
             */}
             
             <p className="text-3xl font-light">MovieTS</p>
        </div>
       
    </div>
  )
}
