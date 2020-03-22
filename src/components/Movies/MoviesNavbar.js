import React, { Component } from "react";
import "./MoviesPage.css";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./../../Context";

export default class MusicNavbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <header className="movies-navbar">
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
            <ul
              className={
                value.isOpen ? "navbar-style show-navbar" : "navbar-style"
              }
            >
              <li>
                <Link to="/" onClick={value.handleBack}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/music" onClick={value.handleBack}>
                  Music
                </Link>
              </li>
              <li>
                <Link to="#" onClick={value.handleBack}>
                  Games
                </Link>
              </li>
            </ul>
          </header>
        )}
      </ProductConsumer>
    );
  }
}
