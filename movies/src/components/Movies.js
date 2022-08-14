import { useSelector } from 'react-redux';
import { getMovies, getTotalPages } from '../redux/movies/movieSlice';

import Movie from './Movie';

import './Movies.css';
import Pagination from './Pagination';

const Movies = () => {
    const movies = useSelector(getMovies);
    const totalPages = useSelector(getTotalPages);

    const moviesCode = movies.map( movie => {
      if (movie.poster_path) {
        return <Movie key={movie.id} {...movie}  />
      }
    });

    return (
      <div className='Movies'>
        <div className='MoviesContainer'>
          {moviesCode}
        </div>
        {totalPages > 1 && <Pagination />}
      </div>
    )
}

export default Movies;