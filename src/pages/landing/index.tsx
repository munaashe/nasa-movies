import React from 'react'
import Header from './Header';
import MoviesList from './MoviesList';
import PictureOfDay from './PictureOfDay';

const Landing = () => {
    return (
        <div>
            <Header />
            <PictureOfDay />
            <MoviesList />
        </div>
    )
}

export default Landing;