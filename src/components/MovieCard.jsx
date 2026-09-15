import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ id, title, image, year, genre }) {
return (
<Link to={`/movie/${id}`} className="movie-card-link"> <div className="movie-card"> <img
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
</Link>


);
}

export default MovieCard;
