import React, { Component } from "react";
import MusicNavbar from "./MusicNavbar";
import Progress from "./../Loader/Progress";
//import MusicApp from "./MusicApp";

export default class MusicPage extends Component {
  render() {
    return (
      <React.Fragment>
        <MusicNavbar />
        <div style={{ marginTop: "200px" }}>
          <Progress />
        </div>
      </React.Fragment>
    );
  }
}
