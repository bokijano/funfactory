import React from "react";

export default function SearchedMovies(props) {
  return (
    <div className={props.value.movieSectDisplay ? "no-display" : "movie"}>
      {props.value.movies.map(movie => {
        return (
          <div
            key={movie.id}
            className={
              movie.poster_path !== null ? "searched-movie" : "no-display"
            }
          >
            <img
              src={props.value.imageURL + movie.poster_path}
              data-movie-id={movie.id}
            />

            <section className="about-style">
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </section>
          </div>
        );
      })}
      <h2 className={props.value.findMovie ? "display-msg" : "no-display"}>
        No Movies Match Your Search
      </h2>
    </div>
  );
}
