import axios from 'axios';

const PATH = 'https://api.themoviedb.org'
const KEY = 'f496025f6cb0adfa3f9f05b6edf25d52'

export const GetTranding = async () => {
    try {
        const response = await axios.get(`${PATH}/3/trending/movie/day?api_key=${KEY}`);
        // console.log(response);
        return response
    } catch (error) {
        console.error(error);
    }
}

export const GetSearchMovies = async (query) => {
    try {
        const response = await axios.get(`${PATH}/3/search/movie?api_key=${KEY}&language=en-US&page=1&query=${query}`);
        // console.log(response);
        return response
    } catch (error) {
        console.error(error);
    }
}

export const GetMovieByID = async (id) => {
    try {
        const response = await axios.get(`${PATH}/3/movie/${id}?api_key=${KEY}&language=en-US`);
        // console.log(response);
        return response
    } catch (error) {
        console.error(error);
    }
}

export const GetCastByID = async (id) => {
    try {
        const response = await axios.get(`${PATH}/3/movie/${id}/credits?api_key=${KEY}&language=en-US`);
        // console.log(response);
        return response
    } catch (error) {
        console.error(error);
    }
}

export const GetReviewsByID = async (id) => {
    try {
        const response = await axios.get(`${PATH}/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`);
        // console.log(response);
        return response
    } catch (error) {
        console.error(error);
    }
}


