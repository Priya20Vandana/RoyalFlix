import "./MovieCard.css";

function MovieCard({ title, image, year, genre }) {
  return (
    <div className="movie-card">
      <img
        src={image}
        alt={title}
        className="movie-poster"
      />

      <div className="movie-info">
        <h3>{title}</h3>

        <div className="movie-details">
          <span>{year}</span>
          <span>{genre}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;