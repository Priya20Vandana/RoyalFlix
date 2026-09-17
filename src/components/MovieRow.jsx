import MovieCard from "./MovieCard";
import "./MovieRow.css";

function MovieRow({ title, movies }) {
  return (
    <section className="movie-row">
      <h2 className="movie-row-title">{title}</h2>

      {movies.length > 0 ? (
        <div className="movie-row-container">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="no-movies">No movies available in this category.</p>
      )}
    </section>
  );
}

export default MovieRow;