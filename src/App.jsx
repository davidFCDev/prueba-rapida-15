import "./App.css";
import responseMovies from "./mocks/with-results.json";

function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form>
          <input type="text" placeholder="Matrix, marvel..." />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        {hasMovies ? (
          <ul className="movies">
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} />
                <h2>{movie.Title}</h2>
                <span>{movie.Year}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay peliculas</p>
        )}
      </main>
    </div>
  );
}

export default App;
