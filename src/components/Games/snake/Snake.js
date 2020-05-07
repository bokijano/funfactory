import React, { Component } from "react";

import SnakeDots from "./SnakeDots";
import Food from "./food";
import Buttons from "./directionBtns";

const getRandomCoordinates = () => {
  let x = Math.floor(Math.random() * 29 + 1) * 10;
  let y = Math.floor(Math.random() * 29 + 1) * 10;

  return [x, y];
};

const initState = {
  dot: getRandomCoordinates(),
  speed: 300,
  score: 0,
  direction: "RIGHT",
  dots: [
    [0, 0],
    [10, 0],
  ],
  newGame: false,
};

export default class Snake extends Component {
  state = initState;

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.checkBorders();
    this.checkIfCollapsed();
    this.eatFood();
  }

  onKeyDown = (e) => {
    e = e || window.event;

    switch (e.keyCode) {
      case 38:
        this.setState({ direction: "UP" });
        break;
      case 40:
        this.setState({ direction: "DOWN" });
        break;
      case 37:
        this.setState({ direction: "LEFT" });
        break;
      case 39:
        this.setState({ direction: "RIGHT" });
        break;
    }
  };

  moveSnake = () => {
    let dots = [...this.state.dots];
    let head = dots[dots.length - 1];

    switch (this.state.direction) {
      case "RIGHT":
        head = [head[0] + 10, head[1]];
        break;
      case "LEFT":
        head = [head[0] - 10, head[1]];
        break;
      case "DOWN":
        head = [head[0], head[1] + 10];
        break;
      case "UP":
        head = [head[0], head[1] - 10];
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({
      dots: dots,
    });
  };

  moveSnakeArrow = (dir) => {
    let dots = [...this.state.dots];
    let head = dots[dots.length - 1];

    this.state.direction = dir;

    switch (this.state.direction) {
      case "RIGHT":
        head = [head[0] + 10, head[1]];
        break;
      case "LEFT":
        head = [head[0] - 10, head[1]];
        break;
      case "DOWN":
        head = [head[0], head[1] + 10];
        break;
      case "UP":
        head = [head[0], head[1] - 10];
        break;
    }

    dots.push(head);
    dots.shift();
    this.setState({
      dots: dots,
    });
  };

  checkBorders() {
    let head = this.state.dots[this.state.dots.length - 1];
    if (head[0] >= 300 || head[1] >= 300 || head[0] < 0 || head[1] < 0) {
      this.props.gameOver();
    }
  }

  checkIfCollapsed() {
    let snake = [...this.state.dots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach((dot) => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        this.props.gameOver();
      }
    });
  }

  eatFood() {
    let head = this.state.dots[this.state.dots.length - 1];
    let food = this.state.dot;
    if (head[0] == food[0] && head[1] == food[1]) {
      this.setState({
        dot: getRandomCoordinates(),
        speed: this.state.speed - 5,
      });
      this.sizeUpSnake();
    }
  }

  sizeUpSnake() {
    let newSnake = [...this.state.dots];
    newSnake.unshift([]);
    this.setState({
      dots: newSnake,
    });
  }

  render() {
    return (
      <React.Fragment>
        <h2>
          Score: <span>{(this.state.dots.length - 2) * 10}</span>
        </h2>
        <section className="grid">
          <SnakeDots dots={this.state.dots} />
          <Food dot={this.state.dot} />
        </section>
        <Buttons moveSnake={this.moveSnakeArrow} />
      </React.Fragment>
    );
  }
}
