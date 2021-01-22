import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {movieService} from "../../services";
import {  toast } from 'react-toastify';

export const MovieDetails = () => {
    const {id} = useParams();
    const [filmDetails, setFilmDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const getMovieDetails = async () => {
        try {
            setIsLoading(true)
            const data = await movieService.getMoviesById(id)
            setFilmDetails(data)
            toast.success('Done')
        } catch (e) {
            console.error(e)
            toast.error('Error')
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getMovieDetails()
    }, [])

    if(isLoading || !filmDetails || isLoading === null){
        return <div>Loading...</div>
    }
    return (
        <div>
            <h1>{filmDetails.original_title}</h1>
            <h2>{filmDetails.tagline}</h2>
            <h2>{filmDetails.genres.map(el => <span key={el.id}> - {el.name} -</span>)}</h2>
            <p>{filmDetails.overview}</p>

        </div>
    )
}
