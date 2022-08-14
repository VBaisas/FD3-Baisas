import React from 'react';
import { Link } from 'react-router-dom';
import './Movie.css';
const API_Img = "https://image.tmdb.org/t/p/w500";

const Movie = (props) => {
  return (
    <div className='Movie'>
      <Link to={`/${props.media_type}/${props.id}`}>
        <div className='MovieInner'>
          <div className='MovieTop'>
            <img className='MoviePoster' src={API_Img + props.poster_path}></img>
          </div>
          <div className='MovieBottom'>
            <div className='MovieInfo'>
              {props.title ? <h3 className='MovieTitle'>{props.title}</h3> : <h3 className='MovieTitle'>{props.name}</h3>}
              <div className='MovieReleaseDate'>
                <span>Release date: </span>
                {props.release_date ? <span>{props.release_date}</span> : <span>{props.first_air_date}</span>}
              </div>
              <div className='MovieVoteAverage'>
                <span>IMDB rating: </span>
                <span>{props.vote_average}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Movie;
