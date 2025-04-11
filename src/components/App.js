
import React, { useContext } from "react";
import './../styles/App.css';
import { MovieContext } from "../../movieContext";

const App = () => {
  const { input, handleChange, handleSubmit, movies, error } = useContext(MovieContext)

  return (
    <div>
      <h2>Search Movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />&nbsp;&nbsp;
        <button>Search</button>
      </form>
      <ul>
        {movies && movies.map((movie, ind) => {
          return (
            <li key={ind}>
              <span><b>{movie.Title}</b></span>
              <br />
              <br />
              <img src={movie.Poster} alt="img" style={{width: "250px", height: "250px", objectFit: "contain"}} />
            </li>
          )
        })}
      </ul>
      {error && <span className="error">{error}</span>}
    </div>
  )
}

export default App
