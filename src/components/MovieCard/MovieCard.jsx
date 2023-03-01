import React from "react";
import ReactStars from "react-stars";
import "./MovieCard.css"

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <h1 className="titre">{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      <h5 className="desc">{movie.description}</h5>
      <ReactStars
        count={5}
        edit={false}
        half={false}
        value={movie.rating}
        size={24}
        color2={"#ffd700"}
      />
    </div>
  );
};

export default MovieCard;
