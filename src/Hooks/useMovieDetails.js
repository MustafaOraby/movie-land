import { useState, useEffect } from 'react';
import axios from 'axios';

const useMovieDetails = (movieId) => {
    const [movie, setMovie] = useState(null);
    
    const getMovieDetails = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`);
        setMovie(res.data);
    };

    useEffect(() => {
        if (movieId) {
            getMovieDetails();
        }
    }, [movieId]);

    return { movie };
};

export default useMovieDetails;
