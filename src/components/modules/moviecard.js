import { useNavigate } from "react-router";

export const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="movie-card" onClick={() => navigate("/movie/" + movie.id)}>
      <div className="movie-image">
        <img src={movie.medium_cover_image} />
        <div className="movie-details">
          <div className="movie-texts">
            <div className="movie-text">
              {" "}
              <span className="material-icons">star</span>
            </div>
            <div className="movie-text"> {movie.rating}/10</div>
            <br />
            {movie.genres.map((genre, key) => (
              <div key={key} className="movie-text">
                {genre}
              </div>
            ))}
            <button>View Details</button>
          </div>
        </div>
      </div>
      <div className="movie-title" style={{ display: "flex" }}>
        <h5
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {movie.title}
          <br />
          <span style={{ color: "gray", fontWeight: "normal" }}>
            {movie.year}
          </span>
        </h5>
      </div>
    </div>
  );
};
