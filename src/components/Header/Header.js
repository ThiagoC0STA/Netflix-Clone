import React from "react";
import "./Header.css";
import RodcDev from "../Images/UserImage/RodcDev.jpeg";

function Header({ black }) {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Logo Netflix"
          />
        </a>
      </div>
      <div className="header--user">
        <a
          href="https://github.com/thiagoc0sta"
          target="_blank"
          rel="noreferrer"
        >
          <img src={RodcDev} alt="Thiago Costa" />
        </a>
      </div>
    </header>
  );
}

export default Header;
