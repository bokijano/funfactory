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
    imageURL: "https://image.tmdb.org/t/p/w500",
    path: [
      "/movie/popular",
      "/movie/now_playing",
      "/movie/top_rated",
      "/movie/upcoming",
    ],
    moviesContainer: [],
    popular: [],
    nowPlaying: [],
    topRated: [],
    upcoming: [],
    movieSectDisplay: true,
    modalDisplay: false,
    movieID: "",
    details: "",
    actors: [],
    trailer: "",
    date: "",
    genre: "",
    trailerURL: "https://www.youtube.com/embed/",
  };
  // generate url
  generateUrl(path) {
    const url = `https://api.themoviedb.org/3${path}?api_key=5f1515407b5d31af2563839415a04874`;
    return url;
  }
  // fetch popular movies
  async getPopularMovies() {
    const url = this.generateUrl("/movie/popular");
    const data = await fetch(url);
    const jsonData = await data.json();

    const movies = jsonData.results.slice(0, 5);

    this.setState({
      popular: movies,
    });
  }
  // fetch now playing movies
  async getNowPlayingMovies() {
    const url = this.generateUrl("/movie/now_playing");
    const data = await fetch(url);
    const jsonData = await data.json();

    const movies = jsonData.results.slice(0, 5);

    this.setState({
      nowPlaying: movies,
    });
  }
  // fetch top rated movies
  async getTopRatedMovies() {
    const url = this.generateUrl("/movie/top_rated");
    const data = await fetch(url);
    const jsonData = await data.json();

    const movies = jsonData.results.slice(0, 5);

    this.setState({
      topRated: movies,
    });
  }
  // fetch upcoming movies
  async getUpcomingMovies() {
    const url = this.generateUrl("/movie/upcoming");
    const data = await fetch(url);
    const jsonData = await data.json();

    const movies = jsonData.results.slice(0, 5);

    this.setState({
      upcoming: movies,
    });
  }
  // fetch search movies
  async getMoviesData(searchMovie) {
    const newUrl = this.state.url + "&query=" + searchMovie;

    const data = await fetch(newUrl);
    const jsonData = await data.json();

    const movieResult = jsonData.results;
    if (movieResult != 0) {
      this.setState({
        movies: movieResult,
        findMovie: false,
      });
    } else {
      this.setState({
        movies: [],
        findMovie: true,
      });
    }
  }
  // display modal with movie details when click on image or button
  handleError = (error) => {
    console.log(error);
  };
  displayDetails = (event) => {
    const target = event.target;

    if (
      target.tagName.toLowerCase() === "img" ||
      target.tagName.toLowerCase() === "button"
    ) {
      const movieID = target.dataset.movieId;

      // fetch movie details
      const details = this.generateUrl(`/movie/${movieID}`);
      fetch(details)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            details: data,
            date: data.release_date.substring(0, 4),
            genre: [data.genres[0].name, data.genres[1].name],
          });
        })
        .catch(this.handleError);

      // fetch actors
      const crew = this.generateUrl(`/movie/${movieID}/credits`);
      fetch(crew)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            actors: [data.cast[0], data.cast[1], data.cast[2]],
          });
        })
        .catch(this.handleError);

      // fetch trailer
      const trailer = this.generateUrl(`/movie/${movieID}/videos`);
      fetch(trailer)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            trailer: data.results[0].key,
          });
        })
        .catch(this.handleError);
      this.setState({
        modalDisplay: true,
      });
    }
  };
  removeModal = () => {
    this.setState({
      modalDisplay: false,
      details: "",
      actors: [],
      trailer: "",
      date: "",
      genre: "",
    });
  };
  // setTimeout 3s on loading page and fetch data functions
  componentDidMount = () => {
    this.getPopularMovies();
    this.getNowPlayingMovies();
    this.getTopRatedMovies();
    this.getUpcomingMovies();
    console.log();
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 3000);
  };
  // function for open pages
  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  handleBack = () => {
    this.setState({
      isOpen: false,
      firstOpen: false,
      movieSectDisplay: true,
    });
  };
  // form function for search movies
  handleChange = (e) => {
    this.setState({
      searchMovie: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.getMoviesData(this.state.searchMovie);
    this.setState({
      searchMovie: "",
      movieSectDisplay: false,
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleToggle: this.handleToggle,
          handleBack: this.handleBack,
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit,
          displayDetails: this.displayDetails,
          removeModal: this.removeModal,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
