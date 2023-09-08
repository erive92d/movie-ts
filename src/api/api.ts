import axios from "axios";

export const initialPage = async (category:string, page:number) => {
    const url =  `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}`;
      const options = {
        headers: {
          accept: 'application/json',
          Authorization: import.meta.env.VITE_AUTH || process.env.VITE_AUTH
        }
      };

     const response = await axios.get(url, options) 
     return response.data.results
}

export const viewMovie = async (movieId:string) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}`;
      const options = {
        headers: {
          accept: 'application/json',
          Authorization: import.meta.env.VITE_AUTH || process.env.VITE_AUTH
        }
      };

     const response = await axios.get(url, options) 
    return response.data
}