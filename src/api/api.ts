import axios from "axios";
const options = {
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_AUTH || process.env.AUTH
  }
};

export const getPopulars = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
  const response = await axios.get(url, options)
  return response.data.results.slice(0, 9)
}

export const initialPage = async (category: string, page: number) => {
  const url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}`;
  const response = await axios.get(url, options)
  return response
}

export const viewMovie = async (movieId: string, format: string) => {
  const url = `https://api.themoviedb.org/3/${format}/${movieId}`;
  const response = await axios.get(url, options)
  return response
}

export const fetchSearch = async (movieTitle: string, type: string) => {
  const url = `https://api.themoviedb.org/3/search/${type}?&query=${movieTitle}&include_adult=false&language=en-US`
  const response = await axios.get(url, options)
  return response.data.results
}

export const movieByGenre = async () => {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en'
  const response = await axios.get(url, options)
  return response
}

export const fetchFeatures = async (feat: string | undefined, page: number) => {
  if (feat) {
    const url = `https://api.themoviedb.org/3/${feat}/popular?language=en-US&page=${page}`;
    const response = await axios.get(url, options)
    return response.data.results
  }

}

export const fetchTrending = async (current: string) => {
  const url = `https://api.themoviedb.org/3/trending/${current}/week?language=en-US`;
  const response = await axios.get(url, options)
  return response.data.results
}

export const fetchPeople = async () => {
  const url = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1';
  const response = await axios.get(url, options)
  return response.data.results.slice(0, 10)
}
