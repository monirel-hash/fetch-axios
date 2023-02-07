import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [keyword, setKeyword] = useState("");
  const [yearFrom, setYearFrom] = useState("");
  const [yearTo, setYearTo] = useState("");
  const [ratingFrom, setRatingFrom] = useState("");
  const [ratingTo, setRatingTo] = useState("");

  const handleSearch = () => {
    // Perform movie search based on filter criteria
  };

  const handleClear = () => {
    setKeyword("");
    setYearFrom("");
    setYearTo("");
    setRatingFrom("");
    setRatingTo("");
  };

  return (
    <div className="sidebar">
      <div className="filter-header">
        <h3>Filter Movies :</h3>
      </div>
      <div className="filter-form">
        <div className="filter-item">
          <label htmlFor="keyword">Keyword:</label>
          <input
            type="text"
            id="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className="filter-item">
          <label htmlFor="yearFrom">Year From:</label>
          <input
            type="text"
            id="yearFrom"
            value={yearFrom}
            onChange={(e) => setYearFrom(e.target.value)}
          />
        </div>
        <div className="filter-item">
          <label htmlFor="yearTo">Year To:</label>
          <input
            type="text"
            id="yearTo"
            value={yearTo}
            onChange={(e) => setYearTo(e.target.value)}
          />
        </div>
        <div className="filter-item">
          <label htmlFor="ratingFrom">Rating From:</label>
          <input
            type="text"
            id="ratingFrom"
            value={ratingFrom}
            onChange={(e) => setRatingFrom(e.target.value)}
          />
        </div>
        <div className="filter-item">
          <label htmlFor="ratingTo">Rating To:</label>
          <input
            type="text"
            id="ratingTo"
            value={ratingTo}
            onChange={(e) => setRatingTo(e.target.value)}
          />
        </div>
        <div className="filter-actions">
          <button className="filter-button" onClick={handleSearch}>
            Search
          </button>
          <button className="filter-button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
