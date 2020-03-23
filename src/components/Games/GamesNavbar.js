import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class GamesNavbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <header className="games-navbar">
            <Link to="/">
              <h1>
                <span>f</span>
                <span>u</span>
                <span>n</span>
                <span></span>
                <span>f</span>
                <span>a</span>
                <span>c</span>
                <span>t</span>
                <span>o</span>
                <span>r</span>
                <span>y</span>
              </h1>
            </Link>
            <button onClick={value.handleToggle}>
              <FaAlignJustify />
            </button>
            <ul className={value.isOpen ? "show-navbar" : null}>
              <li>
                <Link to="/" onClick={value.handleBack}>
                  <span></span>Home
                </Link>
              </li>
              <li>
                <Link to="/music" onClick={value.handleBack}>
                  <span></span>Music
                </Link>
              </li>
              <li>
                <Link to="/movies" onClick={value.handleBack}>
                  <span></span>Movies
                </Link>
              </li>
            </ul>
          </header>
        )}
      </ProductConsumer>
    );
  }
}
