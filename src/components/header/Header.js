import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesSm">React and mern</span>
        <span className="headerTitlesLg">Blog</span>
      </div>
      <img
        src="https://wallpapercave.com/wp/ZxV8qRo.jpg"
        alt=""
        className="headerImg"
      />
    </div>
  );
};

export default Header;
