import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectedItemDetails } from '../redux/movies/movieSlice';

import './MovieDetails.css';

const API_Img = "https://image.tmdb.org/t/p/w500";

const MovieDetails = () => {

  const data = useSelector(getSelectedItemDetails);

  return (
    <div className="MovieDetails">
      {Object.keys(data).length === 0 ?
        (<div>Loading...</div>)
        : (
          <>
            <h1 className="MovieTitle">{data.title}</h1>
            <div className="MovieDetailsContainer">
              <div className="MovieDetailsLeft">
                <img className='MovieDetailsPoster' src={API_Img + data.poster_path}></img>
              </div>
              <div className="MovieDetailsRight">
                <div className="MovieOverview">{data.overview}</div>
                <table className="MovieDetailsInfo">
                  <tbody>
                    <tr>
                      <td>Tagline</td>
                      <td>{data.tagline}</td>
                    </tr>
                    <tr>
                      <td>Release date</td>
                      {data.release_date ? <td>{data.release_date}</td> : <td>{data.first_air_date}</td>}
                    </tr>
                    {data.runtime &&                     
                      <tr>
                        <td>Runtime</td>
                        <td>{data.runtime}</td>
                      </tr>}
                       <tr>
                      <td>IMDB rating</td>
                      <td>{data.vote_average}</td>
                    </tr>
                  </tbody>
                </table>
               </div>
            </div>

          </>
        )}
    </div>
  );
}

export default MovieDetails;
