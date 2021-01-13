import React, { useState, useEffect, useRef } from "react";
import Search from "../search/search.index";
import "./weatherCheck.styles.scss";
import currentLocation from "../../utils/images/cursor.svg";

function WeatherCheck() {
  const [clearable, setClearable] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef();

  const handleInputFocus = (event) => {
    event.preventDefault();
    const parentDiv = document.querySelector(".weather-search-bar");
    const closeIcon = document.querySelector(".clear-icon");
    if (event.type === "focus") {
      setIsFocused(true);
    }
    if (event.type === "blur") {
      if (
        parentDiv.className ===
          "weather-search-bar weather-search-bar_active" &&
        closeIcon.className.baseVal === "clear-icon"
      ) {
        setIsFocused(false);
      } else if (
        clearable &&
        parentDiv.className ===
          "weather-search-bar weather-search-bar_active" &&
        closeIcon.className.baseVal === "clear-icon clear-icon_active"
      ) {
        setIsFocused(false);
      }
    }
    if (event.type === "mousedown") {
      if (
        parentDiv.className === "weather-search-bar" &&
        closeIcon.className.baseVal === "clear-icon clear-icon_active"
      ) {
        setSearchText("");
      } else if (
        parentDiv.className ===
          "weather-search-bar weather-search-bar_active" &&
        closeIcon.className.baseVal === "clear-icon clear-icon_active"
      ) {
        inputRef.current.focus();
        setSearchText("");
      }
    }
  };

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
    setClearable(true);
  };

  useEffect(() => {
    if (searchText === "") {
      setClearable(false);
    }
  }, [searchText]);

  return (
    <React.Fragment>
      <Search
        clearable={clearable}
        searchText={searchText}
        isFocused={isFocused}
        handleClear={handleInputFocus}
        handleInputFocus={handleInputFocus}
        handleSearchText={handleSearchText}
        inputRef={inputRef}
      />
      {isFocused ? (
        <div className="search-result">
          <div className="current-location">
            <img
              src={currentLocation}
              alt="Location icon"
              className="location-icon"
            />
            <span>Use current location</span>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default WeatherCheck;
