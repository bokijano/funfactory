import React, { Component } from "react";

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    loading: true,
    firstOpen: true,
    isOpen: false
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false
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
      isOpen: false,
      firstOpen: false
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
