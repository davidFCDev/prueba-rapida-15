import { useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import responseMovies from "./mocks/with-results.json";

function App() {
  const [search, updateSearch] = useState("");
  const movies = responseMovies.Search;

  const mappedMovies = movies.map((movie) => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    };
  });

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(search);
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form onSubmit={handleSearch}>
          <input
            onChange={handleChange}
            value={search}
            name="query"
            type="text"
            placeholder="Matrix, marvel..."
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
