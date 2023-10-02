
interface DropdownProps {
    options: string[]
    handleFormat: React.ChangeEventHandler<HTMLSelectElement>
    selectedFormat: string
}

export default function Dropdown({options, handleFormat, selectedFormat}:DropdownProps) {  
    
    return (
    <div className=''>
        <select className="select max-w-xs text-black duration-200" onChange={handleFormat} value={selectedFormat}>
            {options && options.map((opt, index) => (
                <option onClick={() =>handleFormat} value={opt} key={index}>
                   <h1 className=''>{opt.toUpperCase()}</h1>
                </option>
            ))}
        </select>
  </div>
  )
}
