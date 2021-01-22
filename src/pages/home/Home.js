import React, {useEffect, useState} from "react";
import {FilmList, PaginationWrapper} from "../../components";
import {movieService, genresService} from "../../services";
import styles from './Home.module.css'
import {useHistory} from 'react-router-dom'

const mergeMoviesWithGenres = (movies, genres) => {
    return movies.map((movie) => {
        const {genre_ids} = movie
        const movieGenresList = genre_ids.map(genreId => genres.find(el => el.id === genreId))
        return {
            ...movie,
            movieGenresList,
        }

    })
}
export const Home = () => {
    const history = useHistory()
    const [genresList, setGenresList] = useState([])
    const [isLoading, setIsLoading] = useState(null)
    const [moviesData, setMoviesData] = useState(null)


    const fetchMovies = (params) => {
        try {

            return movieService.getMovies(params)
        } catch (e) {
            console.error(e)
        }
    }

    const fetchGenres = async () => {
        try {
            const {genres} = await genresService.getGenres()

            return genres
        } catch (e) {
            console.error(e)
        }
    }

    const fetchMoviesData = async () => {
        const request = [fetchMovies(), fetchGenres()]
        try {
            setIsLoading(true)
            const [{results, ...rest}, genres] = await Promise.all(request)

            setMoviesData({movies: mergeMoviesWithGenres(results, genres), ...rest})
            setGenresList(genres)
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false)
        }

    }
    useEffect(() => {
        fetchMoviesData()
    }, [])
    const renderLoadingIndicator = () => <div className={styles.loading}>Loading...</div>

    const onFilmClick = (film) => history.push(`/movie/${film.id}`)

    const handlePageChange = async (page) => {
       const {results, ...rest} = await fetchMovies({page})
        setMoviesData({
            movies: mergeMoviesWithGenres(results, genresList),...rest
        })
    }


    return (
        <div>

            {isLoading || isLoading === null ? renderLoadingIndicator() : (
                <PaginationWrapper currentPage={moviesData.page} totalPages={moviesData.total_pages}
                                   onPrevClick={handlePageChange} onNextClick={handlePageChange}
                                   handleLastPage={handlePageChange}
                                   handleFirstPage={handlePageChange}
                >
                    <FilmList onFilmClick={onFilmClick} items={moviesData.movies}/>
                </PaginationWrapper>
            )}

        </div>
    )
}



