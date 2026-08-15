import React from "react";
import "./MovieCard.css";

function MovieCard({ name, director, description, image, rating, price }) {
  return (
    <div className="movie-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p><strong>Director:</strong> {director}</p>
      <p>{description}</p>
      <p><strong>Rating:</strong> ⭐ {rating}</p>
      <p><strong>Price:</strong> {price}</p>
      <button>Watch Now</button>
    </div>
  );
}

export default MovieCard;
