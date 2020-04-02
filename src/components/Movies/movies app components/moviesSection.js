import React from "react";
import Container from "./moviesContainer";

export default function moviesSection(props) {
  return (
    <section
      className={props.value.movieSectDisplay ? "movie-list" : "no-display"}
    >
      <div className="container-movies">
        <h3>Now Playing Movies</h3>
        <Container
          containers={props.value.nowPlaying}
          imgURL={props.value.imageURL}
        />
      </div>
      <div className="container-movies">
        <h3>Popular Movies</h3>
        <Container
          containers={props.value.popular}
          imgURL={props.value.imageURL}
        />
      </div>
      <div className="container-movies">
        <h3>Top Rated Movies</h3>
        <Container
          containers={props.value.topRated}
          imgURL={props.value.imageURL}
        />
      </div>
      <div className="container-movies">
        <h3>Upcoming Movies</h3>
        <Container
          containers={props.value.upcoming}
          imgURL={props.value.imageURL}
        />
      </div>
    </section>
  );
}
