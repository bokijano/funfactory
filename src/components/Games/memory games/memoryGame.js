import React, { Component } from "react";
import Food from "./foodData";
import { Link } from "react-router-dom";

import Blank from "./../memory pictures/food/blank.png";
import White from "./../memory pictures/food/white.png";

export default class memoryGame extends Component {
  state = {
    food: Food.sort(() => Math.random() - 0.5),
    cardArray: [],
    blank: Blank,
    white: White,
    cardChosen: [],
    cardChosenId: [],
    cardsWon: [],
    winMsg: false,
  };
  componentDidMount() {
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
  }
  checkForMatch = () => {
    let cards = document.querySelectorAll("img");
    console.log(this.state.cardArray);
    let optionOne = this.state.cardChosenId[0];
    let optionTwo = this.state.cardChosenId[1];
    if (this.state.cardChosen[0] === this.state.cardChosen[1]) {
      // delete cards from board
      this.state.cardArray[optionOne].src = this.state.white;
      cards[optionOne].style.pointerEvents = "none";
      this.state.cardArray[optionTwo].src = this.state.white;
      cards[optionTwo].style.pointerEvents = "none";

      this.state.cardsWon.push(this.state.cardChosen);
      console.log(this.state.cardsWon);
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
        <h1 className={this.state.winMsg ? "win-msg" : "no-display"}>
          Congratulations!!! You win the game!!!
        </h1>
        <Link to="/games">back to games</Link>
      </div>
    );
  }
}
