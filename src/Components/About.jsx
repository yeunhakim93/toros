import React from "react";
import "../App.css";
const profileImg = require("../img/Toros.jpg");

export const About = () => {
  return (
    <div className="about" id="about">
      <div className="profile-container">
        <img className="profile" src={profileImg} />
      </div>
      <div className="about-description">
        <h3>Toros</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
          lectus vitae lectus gravida mattis pellentesque vel neque. Etiam
          mollis lectus nec diam tristique tincidunt. Vestibulum gravida ipsum
          sit amet ligula dictum, eget ultricies nisl rutrum. Vestibulum
          scelerisque ex accumsan interdum feugiat. Sed sed aliquam mauris, at
          sagittis ligula. Integer ligula metus, finibus non arcu nec, rhoncus
          fringilla nunc. Phasellus vel metus libero.
        </p>
      </div>
    </div>
  );
};
