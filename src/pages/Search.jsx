import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

import { supabase } from "../lib/supabaseClient";

import "./Search.css";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setLoading(true);
    setErrorMessage("");

    const { data, error } = await supabase
      .from("movies")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error("Error fetching movies:", error.message);
      setErrorMessage("Unable to load movies right now.");
   } else {
  console.log("Movies fetched from Supabase:", data);
  setMovies(data || []);
}

    setLoading(false);
  };

  const filteredMovies = movies.filter((movie) => {
    const search = searchTerm.toLowerCase().trim();

    if (!search) {
      return true;
    }

    const title = movie.title?.toLowerCase() || "";

    const genre = Array.isArray(movie.genre)
      ? movie.genre.join(" ").toLowerCase()
      : movie.genre?.toLowerCase() || "";

    const director = movie.director?.toLowerCase() || "";

    const description = movie.description?.toLowerCase() || "";

    const year = movie.year?.toString() || "";

    const cast = Array.isArray(movie.cast)
      ? movie.cast.join(" ").toLowerCase()
      : movie.cast?.toLowerCase() || "";

    return (
      title.includes(search) ||
      genre.includes(search) ||
      director.includes(search) ||
      description.includes(search) ||
      year.includes(search) ||
      cast.includes(search)
    );
  });

  return (
    <>
      <Navbar />

      <main className="search-page">
        <div className="search-container">

          <h1>Search RoyalFlix</h1>

          <p className="search-subtitle">
            Discover royal stories, period romances, queens,
            empresses, and legendary battles.
          </p>

          {/* Search Box */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by title, genre, actor, director..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          {/* Result Count */}
          {!loading && !errorMessage && (
            <p className="search-result-count">
              {filteredMovies.length} result
              {filteredMovies.length !== 1 ? "s" : ""} found
            </p>
          )}

          {/* Loading State */}
          {loading && (
            <p className="search-status">
              Loading royal stories...
            </p>
          )}

          {/* Error State */}
          {!loading && errorMessage && (
            <p className="search-status error">
              {errorMessage}
            </p>
          )}

          {/* Search Results */}
          {!loading && !errorMessage && (
            <div className="search-results">
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              ))}
            </div>
          )}

          {/* No Results */}
          {!loading &&
            !errorMessage &&
            searchTerm.trim() &&
            filteredMovies.length === 0 && (
              <div className="no-results">
                <h2>No royal story found 👑</h2>

                <p>
                  Try searching by movie title, genre, actor,
                  or director.
                </p>
              </div>
            )}

        </div>
      </main>
    </>
  );
}

export default Search;