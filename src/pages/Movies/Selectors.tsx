
interface SelectProps  {
    handleSelect: React.MouseEventHandler<HTMLButtonElement>
    selector: string
}

export default function Selectors({handleSelect, selector}:SelectProps) {
  return (
    <div className="tabs">
        <button value="top_rated" onClick={handleSelect} className={`tab tab-bordered  text-white ${selector === "top_rated" ? "tab-active" : ""}`}>Top Rated</button> 
        <button value="now_playing" onClick={handleSelect} className={`tab tab-bordered  text-white ${selector === "now_playing" ? "tab-active" : ""}`}>Now Playing</button> 
        <button value="popular" onClick={handleSelect} className={`tab tab-bordered  text-white ${selector === "popular" ? "tab-active" : ""}`}>Popular</button>
        <button value="upcoming" onClick={handleSelect} className={`tab tab-bordered  text-white ${selector === "upcoming" ? "tab-active" : ""}`}>Coming Soon</button>
    </div>
  )
}
