import React, { Component } from "react";

import Music1 from "./components/Home/pictures/music/music2.jpg";
import Music2 from "./components/Home/pictures/music/music3.jpg";
import Music3 from "./components/Home/pictures/music/listen.jpg";

import Cloud1 from "./components/Home/pictures/clouds/cloud.png";
import Cloud2 from "./components/Home/pictures/clouds/cloud2.png";
import Cloud3 from "./components/Home/pictures/clouds/cloud3.png";

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    loading: true,
    isOpen: false,
    musicPict: [],
    cloud: []
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false,
        musicPict: [Music1, Music2, Music3],
        cloud: [Cloud1, Cloud2, Cloud3]
      });
    }, 3000);
  };
  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  handleBack = () => {
    this.setState({
      isOpen: false
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleToggle: this.handleToggle,
          handleBack: this.handleBack
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
