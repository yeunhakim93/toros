import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const studioImg = require("../img/studio.jpeg");

export function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="studio-container">
        <img className="studio" src={studioImg} />
      </div>
      <div className="contact-description">
        <h3>Toros Pottery Studio</h3>
        <div>
          <FontAwesomeIcon icon={faPhone} style={{ width: "30px" }} /> +1 (323)
          344-8330
        </div>
        <a href="mailto:toros@email.com">
          <FontAwesomeIcon icon={faEnvelope} style={{ width: "30px" }} />
          toros@email.com
        </a>
        <a href="https://www.instagram.com/torospottery">
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ width: "30px", textDecoration: "underline" }}
          />
          torospottery
        </a>
        <a href="https://goo.gl/maps/a4tC5ER5AGb2orbZ7">
          <FontAwesomeIcon icon={faLocationDot} style={{ width: "30px" }} />
          4962 N Eagle Rock Blvd, Los Angeles, CA 90041
        </a>
      </div>
    </div>
  );
}
