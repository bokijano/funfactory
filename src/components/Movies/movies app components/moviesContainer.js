import React from "react";

export default function moviesContainer(props) {
  return (
    <React.Fragment>
      {props.containers.map(container => {
        return (
          <img
            key={container.id}
            src={props.imgURL + container.poster_path}
            alt="container picture"
            data-movie-id={container.id}
            onClick={props.displayDetails}
          />
        );
      })}
    </React.Fragment>
  );
}
