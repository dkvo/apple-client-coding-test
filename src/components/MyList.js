import React from "react";
import MovieCard from "../components/MovieCard";

const MyList = ({ myList }) => {
  // iterate through list of myList movies and return list of MovieCard components
  const movies = myList.map(movie => {
    return <MovieCard key={movie.id} movie={movie} usage={"remove"} />;
  });
  return (
    <div className="myList">
      <h3>My List</h3>
      {movies.length < 1 ? "There arent any movie on your list." : movies}
    </div>
  );
};

export default MyList;
