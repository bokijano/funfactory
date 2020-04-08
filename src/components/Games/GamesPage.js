import React from "react";
import "./GamesPage.css";
import GamesNavbar from "./GamesNavbar";
import Progress from "./../Loader/Progress";

export default function GamesPage() {
  return (
    <React.Fragment>
      <GamesNavbar />
      <div style={{ marginTop: "200px" }}>
        <Progress />
      </div>
    </React.Fragment>
  );
}
