import React, { Component } from "react";

import SearchBar from "./youtube components/SearchBar";
import VideoList from "./youtube components/VideoList";
import VideoDetails from "./youtube components/VideoDetails";


export default class MusicApp extends Component {
  handleSubmit = searchItem => {
    console.log("work");
  };
  render() {
    return (
      <React.Fragment>
        <p style={{ marginTop: "150px" }}>Music App</p>
        <SearchBar onFormSubmit={this.handleSubmit} />
        <VideoDetails />
        <VideoList />
      </React.Fragment>
    );
  }
}
