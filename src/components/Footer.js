import React from "react";
import MovieCard from "./MovieCard";
const Footer = ({ myList }) => {
  /*iterate through list of myList movies and return list of MovieCard components,
    remove hover effect from component by removing usage prop.
  */
  const movies = myList.map(movie => {
    return <MovieCard key={movie.id} movie={movie} />;
  });
  return <div className="footer">{movies}</div>;
};

export default Footer;
