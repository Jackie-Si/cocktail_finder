import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function Details() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(()=>{
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c9d768b0e48609a39e5994e15be2f4e4&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {

        const {title, poster_path, overview, release_date} = data;

        const movie = {
          id,
          title,
          overview: overview,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date
        }

        setMovie(movie);
      });
  }, [id])

  return (
    <div>
      <div className="moviedetail">
        {movie.image!=="https://image.tmdb.org/t/p/w500null" ? <img src={movie.image} alt={movie.overview}/> : 
        <img src={"https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"} />
        }
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Overview: {movie.overview}</span>
          <span className="release-date">Release Date: {movie.releaseDate}</span>
          <Link to="/"> 
            <button>Go Back</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Details;