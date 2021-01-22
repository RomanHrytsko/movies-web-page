import {AXIOS} from "./axiosConfig";

 class MovieServices{
   async getMovies(params){
        const {data} = await AXIOS.get('/discover/movie',{
            params
        })
        return data
    }
   async getMoviesById(movieId){
        const {data} = await AXIOS.get(`/movie/${movieId}`)
        return data
    }
}
export const movieService = new MovieServices()
