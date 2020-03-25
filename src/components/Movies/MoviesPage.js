import React, { Component } from "react";
import "./MoviesPage.css";

import MoviesNavbar from "./MoviesNavbar";
import MoviesApp from "./movies app components/MoviesApp";

export default class MoviesPage extends Component {
  render() {
    return (
      <React.Fragment>
        <MoviesNavbar />
        <MoviesApp />
      </React.Fragment>
    );
  }
}
