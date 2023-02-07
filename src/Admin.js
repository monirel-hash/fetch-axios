import React from "react";
import MovieList from "./MovieList";
import movies from "./Movies";
import "./baradmin.css";
import Slidebaradmin from "./Slidebaradmin";
import "./Home.css";
import MovieTable from "./MovieTable";

const Admin = () => {
  return (
    <>
      <header className="Login-header">Admin Portail</header>
      <div className="container">
        <div className="sidebar">
          <Slidebaradmin />
        </div>
        <div className="movies-list">
          <MovieTable />
        </div>
      </div>
      <footer className="Login-footer">
        Copyright © 2022 RealMunir
        <a href="./login">login</a>
      </footer>
    </>
  );
};

export default Admin;
