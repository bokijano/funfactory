import React, { Component } from "react";
import Food from "./foodData";
import { Link } from "react-router-dom";

import Blank from "./../memory pictures/food/blank.png";

import Sport from "./../memory pictures/sport/sport.png";
import Cards from "./../memory pictures/cards/cards.png";
import Actors from "./../memory pictures/actors/actors.png";

export default class memoryGame extends Component {
  state = {
    food: Food.sort(() => Math.random() - 0.5),
    cardArray: [],
    blank: Blank,
    cardChosen: [],
    cardChosenId: [],
    cardsWon: [],
    winMsg: false,
  };
  arrayDisplay = () => {
    let blankArray = [];
    for (let i = 0; i < this.state.food.length; i++) {
      blankArray.push({
        id: i,
        src: this.state.blank,
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
      food: Food.sort(() => Math.random() - 0.5),
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
      this.state.cardArray[optionOne].src = this.state.blank;
      this.state.cardArray[optionTwo].src = this.state.blank;
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
    let flipCard = this.state.food[cardId].name;

    // change blank picture to food picture
    this.state.cardArray[cardId].src = this.state.food[cardId].img;

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
      <section className="whole-page">
        <div className="memory-board">
          {this.state.cardArray.map((image) => {
            return (
              <img
                onClick={() => this.flipCard(image.id)}
                id={image.id}
                key={image.id}
                src={image.src}
                alt="blank card"
              />
            );
          })}
          <section className={this.state.winMsg ? "win-msg" : "no-display"}>
            <h1>Congratulations!!! You win the game!!!</h1>
            <Link to="/food" onClick={this.newGame}>
              Play Again
            </Link>
          </section>
          <Link to="/games">Back to Games</Link>
          <section className="other-games">
            <Link to="/actors">
              <img src={Actors} alt="actors pct" />
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
