import React from "react";
import "./Home.css"; 
import MovieCard from "../../component/MovieCard/MovieCard";
import movies from "../../data.json";

function Home() {
  return (
    <div className="movie-wrapper">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          name={movie.name}
          director={movie.director}
          description={movie.description}
          image={movie.image}
          rating={movie.rating}
          price={movie.price}
        />
      ))}
    </div>
  );
}

export default Home;
