import React, { Component } from "react";
import Home from "./components/Home/Home";
import MusicPage from "./components/Music/MusicPage";
import MoviesPage from "./components/Movies/MoviesPage";
import GamesPage from "./components/Games/GamesPage";
import MemoryFood from "./components/Games/memory games/memoryGame";
import MemorySport from "./components/Games/memory games/sport";
import MemoryActors from "./components/Games/memory games/actors";
import MemoryCards from "./components/Games/memory games/memoryCards";
import SnakeGame from "./components/Games/snake/playSnake";

import { Route, Switch } from "react-router-dom";

import Loader from "./components/Loader/Loader";

import { ProductConsumer } from "./Context";

class App extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => (
          <React.Fragment>
            {value.loading ? (
              <Loader />
            ) : value.firstOpen ? (
              <Home />
            ) : (
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/music" component={MusicPage} />
                <Route exact path="/movies" component={MoviesPage} />
                <Route exact path="/games" component={GamesPage} />
                <Route exact path="/food" component={MemoryFood} />
                <Route exact path="/sport" component={MemorySport} />
                <Route exact path="/actors" component={MemoryActors} />
                <Route exact path="/cards" component={MemoryCards} />
                <Route exact path="/snake" component={SnakeGame} />
              </Switch>
            )}
          </React.Fragment>
        )}
      </ProductConsumer>
    );
  }
}

export default App;
