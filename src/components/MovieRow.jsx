import MovieCard from "./MovieCard";
import "./MovieRow.css";

function MovieRow({ title, movies }) {
  return (
    <section className="movie-row">
      <h2>{title}</h2>

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.image}
            year={movie.year}
            genre={movie.genre}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieRow;