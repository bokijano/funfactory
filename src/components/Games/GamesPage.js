import React from "react";
import "./GamesPage.css";
import GamesNavbar from "./GamesNavbar";
//import Progress from "./../Loader/Progress";
import GamesBoard from "./GamesBoard";

export default function GamesPage() {
  return (
    <React.Fragment>
      <GamesNavbar />
      <GamesBoard />
    </React.Fragment>
  );
}
