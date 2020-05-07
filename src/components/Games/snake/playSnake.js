import React, { Component } from "react";
import "./snake.css";
import Snake from "./Snake";

import { Link } from "react-router-dom";

import { FaPlay } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";

export default class playSnake extends Component {
  state = {
    play: true,
    gameOver: false,
  };
  onPlay = () => {
    this.setState({
      play: false,
    });
  };
  gameOver = () => {
    this.setState({
      play: true,
      gameOver: true,
    });
  };
  render() {
    return (
      <React.Fragment>
        <main>
          <Link className="back-games" to="/games">
            <FaRegWindowClose className="back-btn" />
          </Link>
          {this.state.play ? (
            <section className="grid">
              {this.state.gameOver ? (
                <div className="play-again">
                  <h1>GAME OVER</h1>
                  <button onClick={this.onPlay}>
                    <FaRegPlayCircle className="play-img" />
                  </button>
                </div>
              ) : (
                <button className="play-btn" onClick={this.onPlay}>
                  <FaPlay className="play-img" />
                </button>
              )}
            </section>
          ) : (
            <Snake gameOver={this.gameOver} />
          )}
        </main>
      </React.Fragment>
    );
  }
}
