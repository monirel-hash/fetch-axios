import React, { useState } from "react";
import movies from "./Movies";
import "./MovieTable.css";

const MovieTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);

  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="movie-table-container">
      <button className="add-movie-button">Add Movie</button>
      <table className="movie-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Duration</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies ? (
            currentMovies.map((movie) => (
              <tr>
                <td>{movie.Title}</td>
                <td>{movie.Duration}</td>
                <td>{movie.Country}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No movie found</td>
            </tr>
          )}
          <tr>
            <td colSpan={4}>
              <div className="pagination-container">
                <ul className="pagination">
                  {[...Array(Math.ceil(movies.length / moviesPerPage))].map(
                    (e, i) => (
                      <li key={i} className="page-item">
                        <button
                          onClick={() => paginate(i + 1)}
                          className="page-link"
                        >
                          {i + 1}
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;
