import React from "react";

export default function displayModal(props) {
  const {
    removeModal,
    imageURL,
    date,
    actors,
    trailer,
    trailerURL,
    genre1,
    genre2,
  } = props.value;
  const { poster_path, title, tagline, overview } = props.value.details;
  return (
    <section className="modal-content">
      <p className="close" onClick={removeModal}>
        &times;
      </p>
      <div className="movies-style">
        <img src={imageURL + poster_path} alt="" />
        <section className="modals-details">
          <h2 id="modal-title">
            {title} {date}
          </h2>
          <h3>{tagline}</h3>
          <h2 id="modal-genre">
            {genre1} {genre2}
          </h2>
          <p>{overview}</p>
        </section>
      </div>
      <div className="actors">
        {actors.map((actor) => {
          return (
            <section key={actor.id} className="actor-char">
              <img src={imageURL + actor.profile_path} alt="" />
              <h2>
                {actor.name} as {actor.character}
              </h2>
            </section>
          );
        })}
      </div>
      <div className={trailer ? "trailer" : "no-display"}>
        <iframe
          src={trailerURL + trailer}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
