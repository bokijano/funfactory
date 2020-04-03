import React from "react";
import Container from "./moviesContainer";

export default function moviesSection(props) {
  return (
    <section
      className={props.value.movieSectDisplay ? "movie-list" : "no-display"}
    >
      <div className="container-movies">
        <h1>Now Playing Movies</h1>
        <Container
          displayDetails={props.value.displayDetails}
          containers={props.value.nowPlaying}
          imgURL={props.value.imageURL}
        />
      </div>
      <div className="container-movies">
        <h1>Popular Movies</h1>
        <Container
          displayDetails={props.value.displayDetails}
          containers={props.value.popular}
          imgURL={props.value.imageURL}
        />
      </div>
      <div className="container-movies">
        <h1>Top Rated Movies</h1>
        <Container
          displayDetails={props.value.displayDetails}
          containers={props.value.topRated}
          imgURL={props.value.imageURL}
        />
      </div>
      <div className="container-movies">
        <h1>Upcoming Movies</h1>
        <Container
          displayDetails={props.value.displayDetails}
          containers={props.value.upcoming}
          imgURL={props.value.imageURL}
        />
      </div>
    </section>
  );
}
