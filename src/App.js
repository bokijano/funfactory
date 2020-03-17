import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

import Loader from "./components/Loader/Loader";

class App extends Component {
  state = {
    loading: true
  };
  componentDidMount = () => {
    <React.Fragment>
      <Navbar />
      <Home />
    </React.Fragment>;

    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 3000);
  };
  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Loader />
        ) : (
          <article>
            <Navbar />
            <Home />
          </article>
        )}
      </React.Fragment>
    );
  }
}

export default App;
