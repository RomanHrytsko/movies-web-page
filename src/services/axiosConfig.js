import axios from "axios";


export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzJlMDdjMzcyMWE5NzA2YjBhMmI3MDU2YTcwYWQ0MiIsInN1YiI6IjVmZmVlYjczMGZmMTVhMDA0MDViNjU3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.suKWqbCJ6JTpRcLTo65zPiGBWd5_psHjeVOznrnkHEY'
    }
})

