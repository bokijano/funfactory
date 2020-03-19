import React, { Component } from "react";
import "./MusicPage.css";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./../../Context";

export default class MusicNavbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <header className="music-navbar">
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
            <article
              className={
                value.isOpen
                  ? "navbar-style show-navbar"
                  : "navbar-style animate-navbar"
              }
            >
              <Link to="/" onClick={value.handleBack}>
                Home
              </Link>
              <Link to="#" onClick={value.handleBack}>
                Movies
              </Link>
              <Link to="#" onClick={value.handleBack}>
                Games
              </Link>
            </article>
          </header>
        )}
      </ProductConsumer>
    );
  }
}
