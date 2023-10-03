
interface SelectProps  {
    handleSelect: React.MouseEventHandler<HTMLButtonElement>
    selector: string
}

export default function Selectors({handleSelect, selector}:SelectProps) {
  return (
    <div className="tabs tab-lg">
        <button value="top_rated" onClick={handleSelect} className={`tab tab-bordered  text-gray-300 ${selector === "top_rated" ? "tab-active" : ""}`}>Top Rated</button> 
        <button value="now_playing" onClick={handleSelect} className={`tab tab-bordered  text-gray-300 ${selector === "now_playing" ? "tab-active" : ""}`}>Now Playing</button> 
        <button value="popular" onClick={handleSelect} className={`tab tab-bordered  text-gray-300 ${selector === "popular" ? "tab-active" : ""}`}>Popular</button>
        <button value="upcoming" onClick={handleSelect} className={`tab tab-bordered  text-gray-300 ${selector === "upcoming" ? "tab-active" : ""}`}>Coming Soon</button>
    </div>
  )
}
