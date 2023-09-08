
export const pageBanner = (select:string) => {
    if(select === "popular") {
        return "Most Popular"
    }
    if(select === "top_rated") {
      return "Top Rated"
    }
    if(select === "now_playing") {
      return "Now Playing"
    }
      if(select === "upcoming") {
      return "Upcoming movies"
    }
  }