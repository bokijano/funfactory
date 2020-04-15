import React, { Component } from "react";
import "./GameBoard.css";
import { Link } from "react-router-dom";
import { FaRegWindowClose } from "react-icons/fa";

import Sport from "./memory pictures/sport/sport.png";
import Food from "./memory pictures/food/cheeseburger.png";
import Cards from "./memory pictures/cards/cards.png";
import Actors from "./memory pictures/actors/actors.png";

export default class GamesBoard extends Component {
  state = {
    openMemory: false,
  };
  test = () => {
    console.log("work");
  };
  openMemoryGames = () => {
    this.setState({
      openMemory: true,
    });
  };
  closeMemoryGames = () => {
    this.setState({
      openMemory: false,
    });
  };
  render() {
    return (
      <div className="game-board">
        <section className="games">
          <h1>memory games</h1>
          <button onClick={this.openMemoryGames}>play</button>
          <div
            className={this.state.openMemory ? "memory-games" : "no-display"}
          >
            <button onClick={this.closeMemoryGames} className="close">
              <FaRegWindowClose />
            </button>
            <Link to="/food">
              <img src={Food} alt="food pct" />
            </Link>
            <Link to="">
              <img src={Actors} alt="actors pct" />
            </Link>
            <Link to="/sport">
              <img src={Sport} alt="sport pct" />
            </Link>
            <Link to="">
              <img src={Cards} alt="cards pct" />
            </Link>
          </div>
        </section>
        <section className="games">
          <h1>snake</h1>
          <button onClick={this.test}>play</button>
        </section>
        <section className="games">
          <h1>tetris</h1>
          <button onClick={this.test}>play</button>
        </section>
      </div>
    );
  }
}
