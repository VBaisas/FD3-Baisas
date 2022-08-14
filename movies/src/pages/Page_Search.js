import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Movies from '../components/Movies.js';
import { fetchAsyncSearchAll } from '../redux/movies/movieSlice';

const Page_Search = () => {

  const params = useParams();

  let page =  (params.page);

  let query = (params.query);
 
  const dispatch = useDispatch();

     useEffect(() => {
      dispatch(fetchAsyncSearchAll({query, page}));
    }, [dispatch, query, page]);

    return (
      <Movies />
    )
}

export default Page_Search;
