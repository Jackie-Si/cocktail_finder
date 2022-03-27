import Movie from "./components/Movie";
import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import SearchForm from "./components/SearchForm";

const FEATURED_API =
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API =
"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      fetch(`${SEARCH_API}${searchTerm}`).then((response) => {
        return response.json();
      }).then((data) => {
        setMovies(data.results);
      })
    } else {
      setLoading(true);
      fetch(`${FEATURED_API}`).then((response) => {
        return response.json();
      }).then((data) => {
        setMovies(data.results);
      })
      .then(() => setLoading(false));
    }
  }, [searchTerm]);


  if (loading) {
    return (
      <main>
        <SearchForm setSearchTerm={setSearchTerm} />
        <Loading />
      </main>
    );
  } else {
    return (
      <main>
        <SearchForm setSearchTerm={setSearchTerm} />

        {movies.length !== 0 ?
          <div className="movie-container">
            {movies.map((movie) => {
              return <Movie key={movie.id} {...movie} />;
            })}
          </div> : <h2 className="centered">There is such no movie.</h2>}
      </main>
    );
  }
}

export default App;