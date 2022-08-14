import React, { useEffect } from 'react';
import {useParams} from "react-router-dom";
import { useDispatch } from 'react-redux';

import MovieDetails from '../components/MovieDetails';
import { fetchAsyncItemDetails, removeSelectedItem } from '../redux/movies/movieSlice';

const Page_Movie = props => {
  
    const dispatch = useDispatch();
    const params = useParams();

    let mediaType = (params.media_type);
    let itemID = parseInt(params.itemID);

    useEffect(() => {
      dispatch(fetchAsyncItemDetails({mediaType,itemID}));
      return () => {
        dispatch(removeSelectedItem());
      }
    }, [dispatch, mediaType, itemID]);

       return (
      <MovieDetails/>
    );
    
}
    
export default Page_Movie;