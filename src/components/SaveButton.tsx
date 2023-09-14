import { useEffect, useState } from "react"
import { resultProps } from "../props/props"

interface saveProps {
    previewDetails: resultProps
    handleSave: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>, previewDetails: resultProps) => void
    saveItem: resultProps[]
}


export default function SaveButton({handleSave, saveItem, previewDetails}:saveProps) {
    
    const [isSaved, setIsSaved] = useState<boolean>(false)

    useEffect(() => {

        const checkLocalStorage = () => {
            const isExist = saveItem.some((item) => item.id === previewDetails.id)
            return isExist
        }
        const existOrNot = checkLocalStorage()
        if(existOrNot) {
            setIsSaved(true)
        } else {
            setIsSaved(false)
        }
    },[saveItem, previewDetails])

  

    return (
    <div>
        {isSaved ? <button className="btn btn-xs">SAVED</button> : <button onClick={(e) => handleSave(e, previewDetails)} className='btn btn-success btn-md'>Watch Later</button>
}
    </div>
  )
}
