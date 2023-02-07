import React from "react";
import "./baradmin.css";

const Slidebaradmin = () => {
  return (
    <div className="slidebar">
      <h3>Menu</h3>
      <hr />
      <ul>
        <li>
          <button
            onClick={() => {
              // Logout logic here
            }}
          >
            Movies
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              // Logout logic here
            }}
          >
            Users
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              // Logout logic here
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Slidebaradmin;
