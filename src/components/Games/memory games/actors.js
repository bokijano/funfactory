import React, { Component } from "react";
import { Link } from "react-router-dom";

import Actors from "./actorsData";
import Movie from "./../memory pictures/actors/movie.png";

import Sport from "./../memory pictures/sport/sport.png";
import Food from "./../memory pictures/food/pizza.png";
import Cards from "./../memory pictures/cards/cards.png";

export default class MemoryActors extends Component {
  state = {
    actors: Actors.sort(() => Math.random() - 0.5),
    cardArray: [],
    movie: Movie,
    cardChosen: [],
    cardChosenId: [],
    cardsWon: [],
    winMsg: false,
  };
  arrayDisplay = () => {
    let blankArray = [];
    for (let i = 0; i < this.state.actors.length; i++) {
      blankArray.push({
        id: i,
        src: this.state.movie,
      });
    }
    this.setState({
      cardArray: blankArray,
    });
  };
  componentDidMount() {
    this.arrayDisplay();
  }
  newGame = () => {
    this.arrayDisplay();
    let cards = document.querySelectorAll("img");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.visibility = "visible";
    }

    this.setState({
      actors: Actors.sort(() => Math.random() - 0.5),
      cardChosen: [],
      cardChosenId: [],
      cardsWon: [],
      winMsg: false,
    });
  };
  checkForMatch = () => {
    let cards = document.querySelectorAll("img");
    let optionOne = this.state.cardChosenId[0];
    let optionTwo = this.state.cardChosenId[1];
    if (
      this.state.cardChosen[0] === this.state.cardChosen[1] &&
      optionOne !== optionTwo
    ) {
      // remove cards from board
      cards[optionOne].style.visibility = "hidden";

      cards[optionTwo].style.visibility = "hidden";

      this.state.cardsWon.push(this.state.cardChosen);
    } else {
      this.state.cardArray[optionOne].src = this.state.movie;
      this.state.cardArray[optionTwo].src = this.state.movie;
    }
    if (this.state.cardsWon.length === this.state.cardArray.length / 2) {
      this.setState({
        winMsg: true,
      });
    }
    this.setState({
      cardChosen: [],
      cardChosenId: [],
    });
  };
  flipCard(id) {
    let cardId = id;
    let flipCard = this.state.actors[cardId].name;

    // change blank picture to food picture
    this.state.cardArray[cardId].src = this.state.actors[cardId].img;
    let cardChosen = [...this.state.cardChosen, flipCard];

    let cardChosenId = [...this.state.cardChosenId, id];

    if (cardChosen.length === 2) {
      setTimeout(this.checkForMatch, 500);
    }
    this.setState({
      cardChosen: cardChosen,
      cardChosenId: cardChosenId,
    });
  }
  render() {
    return (
      <section className="actors-page">
        <div className="memory-board">
          {this.state.cardArray.map((actor) => {
            return (
              <img
                onClick={() => this.flipCard(actor.id)}
                key={actor.id}
                id={actor.id}
                src={actor.src}
                alt=""
              />
            );
          })}
          <section className={this.state.winMsg ? "win-msg" : "no-display"}>
            <h1>Congratulations!!! You win the game!!!</h1>
            <Link onClick={this.newGame} to="/actors">
              Play Again
            </Link>
          </section>
          <Link to="/games">Back to Games</Link>
          <section className="other-games">
            <Link to="/food">
              <img src={Food} alt="food pct" />
            </Link>
            <Link to="/sport">
              <img src={Sport} alt="sport pct" />
            </Link>
            <Link to="/cards">
              <img src={Cards} alt="cards pct" />
            </Link>
          </section>
        </div>
      </section>
    );
  }
}
