import React from "react";
import "../App.css";

export function Navbar() {
  console.log("Navbar");
  return (
    <div className="nav">
      <div className="logo">Toros Pottery</div>

      <ul className="nav-list">
        <li>About</li>
        <li>Class</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
