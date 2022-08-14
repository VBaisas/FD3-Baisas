import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Movies from '../components/Movies.js';
import { fetchAsyncMovies, clearMovies } from '../redux/movies/movieSlice';

const Page_Movies = () => {

  const params = useParams();

  let mediaType = (params.media_type);

  let page = (params.page);
 
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchAsyncMovies({mediaType, page}));
      return () => {
        dispatch(clearMovies());
      }
    }, [dispatch, mediaType, page]);

      return (
      <Movies />
    )
}

export default Page_Movies;
