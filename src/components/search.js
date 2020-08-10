import React, {useState} from "react";

const SearchUI = (props) => {
  const [state, setState] = useState("");
  return (
    <>
      <div id="cover">
        <div className="tb">
          <div className="td">
            <input
              type="text"
              value={state}
              placeholder="Search"
              onKeyDown={(e) => {
                e.key === "Enter" && props.handleSearch(e.target.value);
              }}
              onChange={(event) => {
                setState(event.target.value);
              }}
            />
          </div>
          <div className="td" id="s-cover">
            <button
              type="submit"
              onClick={() => {
                props.handleSearch(state);
              }}
            >
              <div id="s-circle"></div>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchUI;
