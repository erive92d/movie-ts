import React from 'react'

interface DropdownProps {
    options: string[]
    handleFormat: React.ChangeEventHandler<HTMLSelectElement>
    selectedFormat: string
}

export default function Dropdown({options, handleFormat, selectedFormat}:DropdownProps) {  
    
    return (
    <div className=''>
        <select className="select max-w-xs" onChange={handleFormat} value={selectedFormat}>
            {options && options.map((opt, index) => (
                <option onClick={() =>handleFormat} value={opt} key={index}>
                   <h1 className=' first-letter:uppercase'>{opt}</h1>
                </option>
            ))}
        </select>
  </div>
  )
}
