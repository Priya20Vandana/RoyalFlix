import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getMovies } from "../services/movieService";

import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovie() {
      try {
        const movies = await getMovies();

        const selectedMovie = movies.find(
          (item) => String(item.id) === String(id)
        );

        if (!selectedMovie) {
          setError("Movie not found.");
        } else {
          setMovie(selectedMovie);
        }
      } catch (err) {
        console.error("Error loading movie details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />

        <main className="movie-details-page">
          <div className="movie-details-container">
            <h1>Loading movie details...</h1>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  if (error || !movie) {
    return (
      <>
        <Navbar />

        <main className="movie-details-page">
          <div className="movie-details-container">
            <h1>{error || "Movie not found"}</h1>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main
        className="movie-details-page"
        style={{
          backgroundImage: `linear-gradient(
            rgba(23, 19, 20, 0.88),
            rgba(23, 19, 20, 0.96)
          ), url("${movie.backdrop_url || movie.image}")`,
        }}
      >
        <div className="movie-details-container">
          <div className="movie-details-content">

            {/* Movie Poster */}
            <div className="movie-poster-container">
              <img
                src={movie.image}
                alt={movie.title}
                className="details-poster"
              />
            </div>

            {/* Movie Information */}
            <div className="movie-details-info">
              <p className="details-category">
                ROYALFLIX
              </p>

              <h1>{movie.title}</h1>

              {/* Movie Meta Information */}
              <div className="details-meta">
                <span>{movie.year || movie.release_year}</span>

                <span>•</span>

                <span>{movie.genre || "Genre unavailable"}</span>

                <span>•</span>

                <span>
                  ⭐ {movie.rating || "Not rated"}
                </span>
              </div>

              {/* Description */}
              <p className="movie-description">
                {movie.description || "No description available."}
              </p>

              {/* Buttons */}
              <div className="details-buttons">
                <button className="watch-button">
                  ▶ Watch Now
                </button>

                <button className="list-button">
                  ♡ My List
                </button>
              </div>

              {/* Additional Information */}
              <div className="movie-extra-info">
                <p>
                  <strong>Duration:</strong>{" "}
                  {movie.duration || "Not available"}
                </p>

                <p>
                  <strong>Language:</strong>{" "}
                  {movie.language || "Not available"}
                </p>

                <p>
                  <strong>Director:</strong>{" "}
                  {movie.director || "Not available"}
                </p>

                <div className="movie-cast">
                  <strong>Cast:</strong>

                  <div className="cast-list">
                    {Array.isArray(movie.cast) &&
                    movie.cast.length > 0 ? (
                      movie.cast.map((actor, index) => (
                        <span key={index}>{actor}</span>
                      ))
                    ) : (
                      <span>Not available</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default MovieDetails;