import React,{useState} from 'react';
import './SearchMovie.css';
import { useNavigate } from 'react-router-dom';

function SearchMovie() {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const changeHandler = (e) => {
    setQuery(e.target.value);
  }

  const submitHandler = (e) => {
    if (query==="") 
      return
    else {
      setQuery("");
      navigate(`/query/${query}/1`);
    }
  }

  return (
    <form className="Search">
      <input type="text" placeholder="Search movies and TV series" className="SearchField" onChange={changeHandler} value={query}/>
      <input type="button" value="OK" className="SubmitSearch" onClick={submitHandler}/>
    </form>
  );
}

export default SearchMovie;