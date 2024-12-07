
interface SelectProps {
  handleSelect: React.MouseEventHandler<HTMLButtonElement>
  selector: string
}

export default function Selectors({ handleSelect, selector }: SelectProps) {
  return (
    <div className="tabs tab-lg lg:justify-around ">
      <button value="top_rated" onClick={handleSelect} className={`tab lg:tab-lg tab-bordered  text-gray-300 ${selector === "top_rated" ? "tab-active font-bold " : ""}`}>Top Rated</button>
      <button value="now_playing" onClick={handleSelect} className={`tab lg:tab-lg tab-bordered  text-gray-300 ${selector === "now_playing" ? "tab-active font-bold" : ""}`}>Now Playing</button>
      <button value="popular" onClick={handleSelect} className={`tab lg:tab-lg tab-bordered  text-gray-300 ${selector === "popular" ? "tab-active font-bold" : ""}`}>Popular</button>
      <button value="upcoming" onClick={handleSelect} className={`tab lg:tab-lg tab-bordered  text-gray-300 ${selector === "upcoming" ? "tab-active font-bold" : ""}`}>Coming Soon</button>
    </div>
  )
}
