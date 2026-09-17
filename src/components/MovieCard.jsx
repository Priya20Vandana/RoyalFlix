import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  if (!movie) {
    return null;
  }

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img
        src={movie.poster_url}
        alt={movie.title}
        className="movie-poster"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />

      <div className="movie-card-overlay">
        <h3>{movie.title}</h3>

        {movie.year && <p>{movie.year}</p>}

        {movie.genre && (
          <p className="movie-genre">
            {Array.isArray(movie.genre)
              ? movie.genre.join(", ")
              : movie.genre}
          </p>
        )}
      </div>
    </Link>
  );
}

export default MovieCard;