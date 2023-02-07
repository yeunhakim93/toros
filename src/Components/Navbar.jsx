import React from "react";
import "../App.css";

export function Navbar() {
  return (
    <div className="nav">
      <div className="logo">Toros Pottery</div>
      <ul className="nav-list">
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#class">
          <li>Class</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
}
