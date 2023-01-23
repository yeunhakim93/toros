import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <div className="Footer">
      <div>
        Copyright © <span style={{ fontWeight: "bold" }}>Toros Pottery</span>,
        2022
      </div>
      {/* |
      <div>
        <FontAwesomeIcon icon={faPhone} /> +1 (323) 344-8330
      </div>
      |
      <div>
        <FontAwesomeIcon icon={faEnvelope} /> toros@email.com
      </div> */}
    </div>
  );
}
