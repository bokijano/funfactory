import React, { Component } from "react";
import Home from "./components/Home/Home";
import MusicPage from "./components/Music/MusicPage";

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
              <article>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/music" component={MusicPage} />
                </Switch>
              </article>
            )}
          </React.Fragment>
        )}
      </ProductConsumer>
    );
  }
}

export default App;
