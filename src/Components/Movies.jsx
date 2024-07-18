import {useState} from "react";
import axios from "axios";


export const Movies = () => {

    const [movieName, setMovieName] = useState()

    const searchMovieByTitle = () => {

        axios.get(`${process.env.REACT_APP_OMDBAPI_URL}?t=${movieName}&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    }

    return <>

        <form>
            <input type='text' onInput={e => setMovieName(e.currentTarget.value)}/>
            <button onClick={searchMovieByTitle} type='button'>Search Movie</button>
        </form>

    </>
}

