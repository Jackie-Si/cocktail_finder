import React from "react";
import { Link } from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, vote_average, id }) => {
  return (
    <div className="movie">
       <Link to={`/details/${id}`}>
        <img
          src={
            poster_path
              ? IMG_API + poster_path
              : "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          }
          alt={title}
        />
      </Link>
      <div className="movie-info">
        <h3>{title}</h3>
        <span
          className={`tag ${
            vote_average >= 8 ? "green" : vote_average >= 6 ? "orange" : "red"
          }`}
        >
          {vote_average}
        </span>
      </div>
    </div>
  );
};

export default Movie;