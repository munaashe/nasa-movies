import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

//Code splitting
const Loader = (Component: any) => (props: any) =>
(
  <React.Suspense fallback={<div>Loading ...</div>} >
    <Component {...props} />
  </React.Suspense>
);
//Lazy loading for pages 
const Landing = Loader(React.lazy(() => import('./pages/landing')));
const Movie = Loader(React.lazy(() => import('./pages/movie')));

function App() {
  return (
    <div style={{backgroundColor: '#040404'}}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/movies/:id' element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
