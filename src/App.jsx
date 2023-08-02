import "./App.css";
import { Movies } from "./components/Movies";
import responseMovies from "./mocks/with-results.json";

function App() {
  const movies = responseMovies.Search;

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
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
