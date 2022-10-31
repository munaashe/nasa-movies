import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { imdbBaseUrl, imdbUrl, api_key } from '../../config/Imdb';
import { Typography } from '@mui/material';

const posterUrl = 'https://image.tmdb.org/t/p/original/';


export interface MovieInfo {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: string,
  budget: string,
  genres: [],
  homepage: string,
  id: string,
  imdb_id: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: string,
  poster_path: string,
  production_companies: [],
  production_countries: [],
  release_date: Date,
  revenue: string,
  runtime: string,
  spoken_languages: [],
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: string,
  vote_count: string
}

const Movie = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = React.useState<MovieInfo | null>();



  //fetching the movie data

  const api = axios.create({ baseURL: imdbBaseUrl });

  const getMovieDetails = api.get(`movie/${id}`, { params: { api_key } });

  React.useEffect(() => {
    getMovieDetails.then((res) => {
      setMovieData({
        adult: res.data.adult,
        backdrop_path: res.data.backdrop_path,
        belongs_to_collection: res.data.belongs_to_collection,
        budget: res.data.budget,
        genres: res.data.genres,
        homepage: res.data.homepage,
        id: res.data.id,
        imdb_id: res.data.imdb_id,
        original_language: res.data.original_language,
        original_title: res.data.original_title,
        overview: res.data.overview,
        popularity: res.data.popularity,
        poster_path: res.data.poster_path,
        production_companies: res.data.production_companies,
        production_countries: res.data.production_countries,
        release_date: res.data.release_date,
        revenue: res.data.revenue,
        runtime: res.data.runtime,
        spoken_languages: res.data.spoken_language,
        status: res.data.status,
        tagline: res.data.tagline,
        title: res.data.title,
        video: res.data.video,
        vote_average: res.data.vote_average,
        vote_count: res.data.vote_count
      });
    });
  }, []);

  return (
    <div style={{ backgroundColor: '#040404', paddingBottom: '20px', minHeight: '100vh' }}>
      <img
        src={`${posterUrl}/${movieData?.poster_path}`}
        alt={movieData?.title}
        height='700px'
      />
      <Typography variant='h5' align='left' sx={{ fontWeight: 'bold', color: '#fff' }}>
        Title: {movieData?.title}
      </Typography>
      <Typography variant='h5' align='left' sx={{ fontWeight: 'bold', color: '#fff' }}>
        Tagline: {movieData?.tagline}
      </Typography>
      <Typography variant='h5' align='left' sx={{ fontWeight: 'bold', color: '#fff' }}>
        Overview: {movieData?.overview}
      </Typography>
      <Typography variant='h5' align='left' sx={{ fontWeight: 'bold', color: '#fff' }}>
        Vote Average: {movieData?.vote_average}
      </Typography>
      <Typography variant='h5' align='left' sx={{ fontWeight: 'bold', color: '#fff' }}>
        Total Votes: {movieData?.vote_count}
      </Typography>
      <Typography variant='h5' align='left' sx={{ fontWeight: 'bold', color: '#fff' }}>
        Status: {movieData?.status}
      </Typography>
      <Typography variant='h5' align='left' sx={{ fontWeight: 'bold', color: '#fff' }}>
        IMDB Link: <a href={`${imdbUrl}${movieData?.imdb_id}`} target='_blank'> {movieData?.imdb_id}</a>
      </Typography>
      <Typography variant='h5' align='left' sx={{ fontWeight: 'bold', color: '#fff' }}>
        Budget: {movieData?.budget}
      </Typography>
    </div>
  )
}

export default Movie





