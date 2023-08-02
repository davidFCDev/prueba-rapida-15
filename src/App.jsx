import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";

function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("No se puede buscar una película vacía");
      return;
    }

    if (search.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}

function App() {
  const { search, updateSearch, error } = useSearch();
  const [movies, setMovies] = useState([]);
  const handleSearch = (event) => {
    event.preventDefault();
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
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
