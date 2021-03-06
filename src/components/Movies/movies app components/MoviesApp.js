import React, { Component } from "react";
import "./MovieApp.css";
import { ProductConsumer } from "./../../../Context";
import Section from "./moviesSection";
import SearchedMovies from "./SearchedMovies";
import DisplayModal from "./displayModal";

import { FaSearch } from "react-icons/fa";

export default class MoviesApp extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductConsumer>
          {(value) => (
            <article className="app-style">
              <div className={value.modalDisplay ? "modal" : "no-display"}>
                <DisplayModal value={value} removeModal={value.removeModal} />
              </div>

              <section className="welcome-style">
                <h1 onClick={value.handleBack}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  MOVIE APPLICATION
                </h1>
              </section>

              <Section value={value} />

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
              <SearchedMovies value={value} />
            </article>
          )}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}
