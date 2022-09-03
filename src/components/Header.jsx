import React, { useEffect } from "react";
import "../styles/App.css";
import { views } from "../utils/constants";

const Header = ({ currentView, setCurrentView, _darkMode, _setDarkMode }) => {
  const editMode = new URLSearchParams(window.location.search).get("edit");

  return (
    <div className="header">
      <div className="logo">
        <img src="/logo.png" alt="logo" width="48px" height="48px" />
        <h1>Story Studio</h1>
      </div>
      <div className="headerright">
        {/*<button onClick={_setDarkMode}>
          {_darkMode ? "Light Mode" : "Dark Mode"}
        </button>*/}
        {/* for each key in views (an object) create a button that calls setCurrentView with the view's value, and is active if the currentView is current button */}
        {Object.keys(views).map((key, index) => {
          if ((editMode === "false" || !editMode) && key === "base")
            return null;
          return (
            <button
              key={key}
              className={
                "viewButton " +
                (currentView === Object.keys(views)[index]
                  ? "activeButton"
                  : "")
              }
              onClick={() => setCurrentView(Object.keys(views)[index])}
            >
              {views[key]}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Header;