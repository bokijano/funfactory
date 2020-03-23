import React, { Component } from "react";
import "./Navbar.css";
import { ProductConsumer } from "./../../Context";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <header className="navbar">
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
            <button className="nav-btn">
              <FaAlignJustify onClick={value.handleToggle} />
            </button>
            <article
              className={
                value.isOpen ? "navbar-style show-navbar" : "navbar-style"
              }
            >
              <Link to="/music" onClick={value.handleBack}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Music
              </Link>
              <Link to="/movies" onClick={value.handleBack}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Movies
              </Link>
              <Link to="games" onClick={value.handleBack}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Games
              </Link>
            </article>
          </header>
        )}
      </ProductConsumer>
    );
  }
}
