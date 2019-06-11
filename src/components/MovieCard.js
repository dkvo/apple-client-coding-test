import React, { useState } from "react";

import Button from "../containers/Button";

const MovieCard = ({ movie, usage }) => {
  let button = "";
  const [isHover, setHover] = useState(false);
  if (isHover && usage) button = <Button usage={usage} movie={movie} />;
  return (
    <div
      className="movieCard"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={movie.img} alt={movie.title} />
      {button}
    </div>
  );
};

export default MovieCard;
