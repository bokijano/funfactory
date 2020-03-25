import React, { Component } from "react";
import "./MovieApp.css";
import { ProductConsumer } from "./../../../Context";
import { FaSearch } from "react-icons/fa";

import { TextField } from "@material-ui/core";

export default class MoviesApp extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductConsumer>
          {value => (
            <article className="app-style">
              <section className="welcome-style">
                <h2>WELCOME</h2>
                <h2>TO</h2>
                <h1>
                  <span>M</span>
                  <span>O</span>
                  <span>V</span>
                  <span>I</span>
                  <span>E</span>
                  <span> </span>
                  <span>A</span>
                  <span>P</span>
                  <span>P</span>
                </h1>
                <h4>Search for your favourite movie</h4>
              </section>
              <form onSubmit={value.handleSubmit} className="form-style">
                <TextField fullWidth onChange={value.handleChange} />
                <button type="submit">
                  <FaSearch />
                </button>
              </form>
              <div className="movie">
                {value.movies.map(movie => {
                  return (
                    <div
                      key={movie.id}
                      className={
                        movie.poster_path !== null
                          ? "searched-movie"
                          : "no-display"
                      }
                    >
                      <img
                        src={value.imageURL + movie.poster_path}
                        data-movie-id={movie.id}
                      />

                      <section className="about-style">
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                      </section>
                    </div>
                  );
                })}

                <h2 className={value.findMovie ? "display-msg" : "no-display"}>
                  No Movies Match Your Search
                </h2>
              </div>
            </article>
          )}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}
