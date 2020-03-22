import React, { Component } from "react";
import Home from "./components/Home/Home";
import MusicPage from "./components/Music/MusicPage";
import MoviesPage from "./components/Movies/MoviesPage";

import { Route, Switch } from "react-router-dom";

import Loader from "./components/Loader/Loader";

import { ProductConsumer } from "./Context";

class App extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <React.Fragment>
            {value.loading ? (
              <Loader />
            ) : (
              value.firstOpen ? <Home /> : (
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/music" component={MusicPage} />
                  <Route path="/movies" component={MoviesPage} />
                </Switch>
              )
            )}
          </React.Fragment>
        )}
      </ProductConsumer>
    );
  }
}

export default App;
