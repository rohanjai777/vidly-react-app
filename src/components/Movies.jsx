import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService.js";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDeleteMovie = (id) => {
    let remainingMovies = this.state.movies.filter((m) => m._id !== id);
    this.setState({ movies: remainingMovies });
  };

  render() {
    let { length: count } = this.state.movies; // renaming destructured object as count
    if (count === 0) return <p>There are no movies</p>;

    return (
      <>
        <p> Showing {count} in database </p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          {this.state.movies.map((movie) => {
            return (
              <tbody key={movie._id}>
                <tr>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.handleDeleteMovie(movie._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </>
    );
  }
}

export default Movies;
