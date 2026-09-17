import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import MovieRow from "../components/MovieRow";

import { getMovies } from "../services/movieService";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getMovies();

        console.log("Fetched movies:", data);
        console.log(
          "Fetched movie IDs:",
          data.map((movie) => movie.id)
        );

        setMovies(data);
      } catch (err) {
        console.error("Error loading movies:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  // Group movies according to their order in the database
  const trendingMovies = movies.slice(0, 5);
  const queensAndEmpresses = movies.slice(5, 9);
  const periodRomance = movies.slice(9, 13);
  const warPowerPolitics = movies.slice(13, 17);

  return (
    <>
      <Navbar />

      <Hero />

      {loading && (
        <p className="text-center text-lg py-10">
          Loading RoyalFlix movies...
        </p>
      )}

      {error && (
        <p className="text-center text-red-500 py-10">
          Error loading movies: {error}
        </p>
      )}

      {!loading && !error && (
        <>
          <MovieRow
            title="Trending Royal Stories"
            movies={trendingMovies}
          />

          <MovieRow
            title="Queens & Empresses"
            movies={queensAndEmpresses}
          />

          <MovieRow
            title="Period Romance"
            movies={periodRomance}
          />

          <MovieRow
            title="War, Power & Politics"
            movies={warPowerPolitics}
          />
        </>
      )}

      <Footer />
    </>
  );
}

export default Home;