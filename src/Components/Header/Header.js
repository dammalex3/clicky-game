import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <h1>Clicky Game</h1>
      <h3>Score: {props.score}</h3>
    </header>
  );
}

export default Header;
