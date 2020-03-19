import React, { Component } from "react";

import SearchBar from "./youtube components/SearchBar";
import VideoList from "./youtube components/VideoList";
import VideoDetails from "./youtube components/VideoDetails";

import youtube from "./api/youtube";

export default class MusicApp extends Component {
  handleSubmit = async searchItem => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResult: 5,
        key: "AIzaSyA4xchW_ryVjUbr_AyJhzalV6We76v-y6U",
        q: searchItem
      }
    });
    console.log(response);
  };
  render() {
    return (
      <React.Fragment style={{ marginTop: "100px" }}>
        <SearchBar onFormSubmit={this.handleSubmit} />
        <VideoDetails />
        <VideoList />
      </React.Fragment>
    );
  }
}
