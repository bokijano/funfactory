import React, { Component } from "react";

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    loading: true,
    firstOpen: true,
    isOpen: false,
    API_KEY: "5f1515407b5d31af2563839415a04874",
    url:
      "https://api.themoviedb.org/3/search/movie?api_key=5f1515407b5d31af2563839415a04874",
    movies: [],
    searchMovie: "",
    findMovie: false,
    imageURL: "https://image.tmdb.org/t/p/w500"
  };
  async getMoviesData(searchMovie) {
    const newUrl = this.state.url + "&query=" + searchMovie;

    const data = await fetch(newUrl);
    const jsonData = await data.json();

    const movieResult = jsonData.results;

    this.setState({
      movies: movieResult
    });
  }
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
  handleChange = e => {
    this.setState({
      searchMovie: e.target.value
    });
  };
  handleSubmit = e => {
    this.getMoviesData(this.state.searchMovie);
    e.preventDefault();
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleToggle: this.handleToggle,
          handleBack: this.handleBack,
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
