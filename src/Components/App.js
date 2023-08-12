import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";
import AddMovie from "./AddMovie";
import { Routes, Route, Link, } from "react-router-dom";

class App extends React.Component {
  state = {
    query: "",
    movies: [],
  };

  /*
  fetch kullanımı 
  async componentDidMount() {
    const baseURL = " http://localhost:3002/movies";
    const response = await fetch(baseURL);

    const data = await response.json();
    console.log(data);
    this.setState({ movies: data });
  }

 */

  /* axios kütphanesi kullandık daha kolay çekebiliyosun json şekilndeki veriyi */
  async componentDidMount() {
    const response = await axios.get(" http://localhost:3002/movies");

    this.setState({ movies: response.data });
  }

  /* burada fetch metoduyla json dosyasından filmi siliyor. geri tırnak için altgr ile noktalı virgüle bascaksın. 
  deleteMovie = async (movie) => {
    const url = `http://localhost:3002/movies/${movie.id}`
    await fetch(url, {
      method: "DELETE"
    })
    console.log(url)

    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState({
      movies: newMovieList,
    });
  };
  */

  /* burada axios metoduyla json dosyasından filmi siliyor. geri tırnak için altgr ile noktalı virgüle bascaksın. */
  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3002/movies/${movie.id}`)


    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState({
      movies: newMovieList,
    });
  };
  filmEkle = async (movie) => {
    await axios.post(`http://localhost:3002/movies/`, movie)

    this.setState({
      movies: this.state.movies.concat([movie]),
    });
  };

  /*  
   
  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState({
      movies: newMovieList,
    });
  };
   */

  searchMovie = (event) => {
    this.setState({ query: event.target.value });
  };

  render() {


    let filtrelenmis_filmler = this.state.movies.filter((movie) => {
      return (
        movie.name.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1
      );
    });
    return (

      <Routes>
        <Route path="/" Component={() => (
          <React.Fragment>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-10 '>
                  <SearchBar searchMovieProp={this.searchMovie} />
                </div>
                <div className="col-lg-2"><Link to="/add" className="  btn btn-danger btn-md mb-5 mt-5" style={{ float: "right", clear: "both" }}> Film Ekle</Link></div>


                <div className='col-lg-12'>
                  <MovieList
                    movies={filtrelenmis_filmler}
                    deleteMovieProp={this.deleteMovie}
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        )}>

        </Route>
        <Route path="/add" Component={() => (

          <AddMovie onFilmEkle={(movie) => {
            this.filmEkle(movie);


          }} />

        )}>

        </Route>
      </Routes>

    );
  }
}

export default App;
