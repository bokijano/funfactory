import React, { Component } from "react";
import "./Navbar.css";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  handleBack = () => {
    this.setState({
      isOpen: false
    });
  };
  render() {
    return (
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
          <FaAlignJustify onClick={this.handleToggle} />
        </button>
        <article
          className={
            this.state.isOpen ? "navbar-style show-navbar" : "navbar-style"
          }
        >
          <Link to="#" onClick={this.handleBack}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Music
          </Link>
          <Link to="#" onClick={this.handleBack}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Movies
          </Link>
          <Link to="#" onClick={this.handleBack}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Games
          </Link>
        </article>
      </header>
    );
  }
}
