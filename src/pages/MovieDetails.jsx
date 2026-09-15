import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./MovieDetails.css";

import {
  trendingMovies,
  queensAndEmpresses,
  periodRomance,
  warPowerPolitics,
} from "../data/movies";

function MovieDetails() {
  const { id } = useParams();

  const allMovies = [
    ...trendingMovies,
    ...queensAndEmpresses,
    ...periodRomance,
    ...warPowerPolitics,
  ];

  const movie = allMovies.find(
    (movie) => movie.id === Number(id)
  );

  if (!movie) {
    return (
      <>
        <Navbar />
        <h1>Movie not found</h1>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="movie-details-page">
        <div className="movie-details-container">

          <Link to="/" className="back-button">
            ← Back to Home
          </Link>

          <div className="movie-details-content">

            <div className="movie-poster-container">
              <img
                src={movie.image}
                alt={movie.title}
                className="details-poster"
              />
            </div>

            <div className="movie-details-info">

              <p className="details-category">
                ROYALFLIX
              </p>

              <h1>{movie.title}</h1>

              <div className="details-meta">
                <span>{movie.year}</span>
                <span>•</span>
                <span>{movie.genre}</span>
              </div>

              <p className="movie-description">
                Step into the world of {movie.title}, where history,
                romance, power, and unforgettable stories come alive.
              </p>

              <div className="details-buttons">
                <button className="watch-button">
                  ▶ Watch Now
                </button>

                <button className="list-button">
                  ♡ My List
                </button>
              </div>

            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default MovieDetails;