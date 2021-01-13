import React from "react";
import "./search.styles.scss";

function Search(props) {
  return (
    <React.Fragment>
      <div
        className={`weather-search-bar${
          props.isFocused ? " weather-search-bar_active" : ""
        }`}
      >
        <div className="search-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="search-icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path d="M15.784 13.68l-4.096-4.096c.585-.955.94-2.067.94-3.27a6.315 6.315 0 1 0-6.314 6.314 6.253 6.253 0 0 0 3.27-.937l4.096 4.094a.751.751 0 0 0 1.052 0l1.052-1.052a.75.75 0 0 0 0-1.053zm-9.47-3.157a4.21 4.21 0 1 1 0-8.419 4.21 4.21 0 0 1 0 8.42z"></path>
          </svg>
          {/* <form action="" className="search-form"> */}
          <input
            type="text"
            className="search-input"
            placeholder="Search location, zip..."
            value={props.searchText}
            spellCheck="false"
            onFocus={(event) => props.handleInputFocus(event)}
            onBlur={(event) => props.handleInputFocus(event)}
            onChange={props.handleSearchText}
            ref={props.inputRef}
          />
          {/* </form> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`clear-icon${
              props.clearable ? " clear-icon_active" : ""
            }`}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            onMouseDown={(event) => props.handleClear(event)}
          >
            <g fillRule="evenodd" transform="translate(-1 -1)">
              <rect
                width="2"
                height="24"
                x="9"
                y="-2"
                rx="1"
                transform="rotate(45 10 10)"
              ></rect>
              <rect
                width="2"
                height="24"
                x="9"
                y="-2"
                rx="1"
                transform="rotate(-45 10 10)"
              ></rect>
            </g>
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Search;
