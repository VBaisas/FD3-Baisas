import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Movies from '../components/Movies.js';
import { clearMovies, fetchAsyncTrending } from '../redux/movies/movieSlice';

const Page_Home = () => {
 
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchAsyncTrending());
      return () => {
        dispatch(clearMovies());
      }
    }, [dispatch]);

    return (
      <Movies />
    )
}

export default Page_Home;
