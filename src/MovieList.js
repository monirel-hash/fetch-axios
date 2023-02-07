import React from "react";
import { Card, Pagination } from "antd";

const MovieCard = ({ movie }) => {
  // console.log(movie?.Image);
  return (
    <>
      <Card
        hoverable
        cover={
          <img
            src={`images/${movie.Image}`}
            alt={movie.Title}
            style={{ width: "100%", height: "350px", borderRadius: "0px" }}
          />
        }
        title={movie.Title}
        style={{ width: 350, margin: 10 }}
      >
        <p>Rating: {movie.Rating}</p>
        <p>Release Date: {movie.ReleaseDate}</p>
      </Card>
    </>
  );
};

class MovieList extends React.Component {
  state = {
    currentPage: 1,
    moviesPerPage: 8
  };

  handlePaginationChange = (page) => {
    this.setState({
      currentPage: page
    });
  };

  render() {
    const { movies } = this.props;
    const { currentPage, moviesPerPage } = this.state;

    // Logic for displaying current movies
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    return (
      <div>
        <Pagination
          defaultCurrent={1}
          total={movies.length}
          pageSize={moviesPerPage}
          onChange={this.handlePaginationChange}
          style={{ marginTop: "20px" }}
        />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {currentMovies.map((movie) => (
            <MovieCard key={movie.ID} movie={movie} />
          ))}
        </div>
        <Pagination
          defaultCurrent={1}
          total={movies.length}
          pageSize={moviesPerPage}
          onChange={this.handlePaginationChange}
          style={{ marginTop: "20px" }}
        />
      </div>
    );
  }
}

export default MovieList;
