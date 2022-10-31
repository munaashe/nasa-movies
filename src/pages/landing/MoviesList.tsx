import { Box, Card, CardContent, CardMedia, Container, Grid, Typography, Stack } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { imdbBaseUrl, api_key } from '../../config/Imdb';

const posterUrl = 'https://image.tmdb.org/t/p/original/'

const MoviesList = () => {
  const [initialized, setInitialized] = React.useState(false);
  const [movies, setMovies] = React.useState<any[]>([]);

  //fetching the movies data
  const fetchData = async () => {
    const response = await axios.get(
      `${imdbBaseUrl}/search/movie?api_key=${api_key}&language=en-US&query=NASA&include_adult=false`
    );

    setMovies(response.data.results);
  }

  React.useEffect(() => {
    // Call the API only once
    if (!initialized) {
      fetchData();
      setInitialized(true);
    }
  })

  console.log(movies);

  return (
    <div style={{ backgroundColor: '#040404', paddingBottom: '40px', marginTop: '30px'}}>
      <Container maxWidth='lg'>
        <Grid container spacing={2} justifyContent='center' sx={{ backgroundColor: '#040404' }}>
          {movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} display='flex'>
              <Box sx={{ padding: '20px', backgroundColor: '#fff' }}>
                <Link to={`/movies/${movie.id}`} rel='noreferrer' style={{ textDecoration: 'none' }}>
                  <Card sx={{ backgroundColor: '#fff', boxShadow: 'none' }}>
                    <CardMedia

                      component='img'
                      alt={movie.title}
                      image={`${posterUrl}/${movie.poster_path}`}
                      height='350px'
                    />
                    <CardContent sx={{ ':hover': { textDecoration: 'underline', textDecorationColor: '#f4ae04' } }}>
                      <Typography variant='h6' align='center' sx={{ color: '#f4ae04', fontWeight: 'bold' }}>
                        {movie.title}
                      </Typography>
                      <br />
                      <Typography variant='body1' align='left' sx={{ fontWeight: 'bold', color: '#040404' }}>
                        Description:
                      </Typography>
                      <Typography variant='body1' align='left' sx={{ color: '#040404' }}>
                        {movie.overview}
                      </Typography>
                      <br />
                      <Stack direction='row' gap={2} justifyContent='left'>
                        <Typography variant='body1' align='left' sx={{ color: '#040404' }}>
                          Popularity:
                        </Typography>
                        <Typography variant='body1' align='left' sx={{ color: '#f4ae04' }}>
                          {movie.popularity}
                        </Typography>
                      </Stack>
                      <br />
                      <Stack direction='row' gap={2} justifyContent='left'>
                        <Typography variant='body1' align='left' sx={{ color: '#040404' }}>
                          Release Date:
                        </Typography>
                        <Typography variant='body1' align='left' sx={{ color: '#f4ae04' }}>
                          {movie.release_date}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default MoviesList
