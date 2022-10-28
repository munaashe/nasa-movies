import axios from 'axios';
import React from 'react';
import { imdbBaseUrl, api_key } from '../../config/Imdb';


const MoviesList = () => {
  const [initialized, setInitialized] = React.useState(false);
  const [movieList, setMovieList] = React.useState({ results: [] });

  //fetching the movies data
  const fetchData = async () => {
    const movies = await axios(
      `${imdbBaseUrl}/search/movie?api_key=${api_key}&language=en-US&query=NASA&include_adult=false`
    );

    setMovieList(movies.data);
  }

  React.useEffect(() => {
    // Call the API only once
    if (!initialized) {
      fetchData();
      setInitialized(true);
    }
  })

  console.log(movieList);

  return (
    <div>MoviesList</div>
  )
}

export default MoviesList



