import React, { Component } from "react";
import "./MovieApp.css";
import { ProductConsumer } from "./../../../Context";
import Section from "./moviesSection";
import { FaSearch } from "react-icons/fa";

export default class MoviesApp extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductConsumer>
          {value => (
            <article className="app-style">
              <div className="welcome-style">
                <h1 onClick={value.handleBack}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  MOVIE APPLICATION
                </h1>
                <Section value={value} />
              </div>
              <form onSubmit={value.handleSubmit}>
                <h3>Search for your favourite movie</h3>
                <section className="form-style">
                  <input
                    className="text-field"
                    type="text"
                    value={value.searchMovie}
                    onChange={value.handleChange}
                  />
                  <button type="submit">
                    <FaSearch />
                  </button>
                </section>
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
