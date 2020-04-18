import React, { Component } from "react";
import "./GamesPage.css";
import GamesNavbar from "./GamesNavbar";
import GamesBoard from "./GamesBoard";

//import ProductProvider from "./GamesContext";

export default class GamesPage extends Component {
  render() {
    return (
      <React.Fragment>
        <GamesNavbar />
        <GamesBoard />
      </React.Fragment>
    );
  }
}
