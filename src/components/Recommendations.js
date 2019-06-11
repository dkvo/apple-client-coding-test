import React from "react";
import MovieCard from "../components/MovieCard";

const Recommendations = ({ recommendations }) => {
  // iterate through list of recommended movies and return list of MovieCard components
  const movies = recommendations.map(movie => {
    return <MovieCard key={movie.id} movie={movie} usage={"add"} />;
  });
  return (
    <div className="recommendations">
      <h3>Recommendations</h3>
      {movies.length < 1 ? "There arent any recommended movie." : movies}
    </div>
  );
};

export default Recommendations;
