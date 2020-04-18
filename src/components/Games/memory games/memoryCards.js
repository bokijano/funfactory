import React, { Component } from "react";
import { Link } from "react-router-dom";

import Cards from "./cardsData";
import CardDeck from "./../memory pictures/cards/card-deck.png";

import Sport from "./../memory pictures/sport/sport.png";
import Food from "./../memory pictures/food/pizza.png";
import Actors from "./../memory pictures/actors/actors.png";

export default class MemoryCards extends Component {
  state = {
    cards: Cards.sort(() => Math.random() - 0.5),
    cardArray: [],
    deck: CardDeck,
    cardChosen: [],
    cardChosenId: [],
    cardsWon: [],
    winMsg: false,
  };
  arrayDisplay = () => {
    let blankArray = [];
    for (let i = 0; i < this.state.cards.length; i++) {
      blankArray.push({
        id: i,
        src: this.state.deck,
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
      cards: Cards.sort(() => Math.random() - 0.5),
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
      this.state.cardArray[optionOne].src = this.state.deck;
      this.state.cardArray[optionTwo].src = this.state.deck;
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
    let flipCard = this.state.cards[cardId].name;

    // change blank picture to food picture
    this.state.cardArray[cardId].src = this.state.cards[cardId].img;
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
      <section className="cards-page">
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
            <Link onClick={this.newGame} to="/cards">
              Play Again
            </Link>
          </section>
          <Link to="/games">Back to Games</Link>
          <section className="other-games">
            <Link to="/food">
              <img src={Food} alt="food pct" />
            </Link>
            <Link to="/actors">
              <img src={Actors} alt="actors pct" />
            </Link>
            <Link to="/sport">
              <img src={Sport} alt="sport pct" />
            </Link>
          </section>
        </div>
      </section>
    );
  }
}
