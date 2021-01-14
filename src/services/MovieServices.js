import {AXIOS} from "./axiosConfig";

 class MovieServices{
   async getMovies(){
        const {data} = await AXIOS.get('/discover/movie')
        return data
    }
   async getMoviesById(movieId){
        const {data} = await AXIOS.get(`/movie/${movieId}`)
        return data
    }
}
export const movieService = new MovieServices()