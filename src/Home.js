import React from "react";
import MovieList from "./MovieList";
import movies from "./Movies";
import Sidebar from "./SideBar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <header className="Login-header">Movies Database</header>
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="movies-list">
          <MovieList movies={movies} />
        </div>
      </div>
      <footer className="Login-footer">
        Copyright © 2022 &nbsp; RealMunir &nbsp;
        <a href="./login">Login</a>
      </footer>
    </>
  );
};

export default Home;
