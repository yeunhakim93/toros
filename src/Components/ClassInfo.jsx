import React from "react";
import "../App.css";

export const ClassInfo = () => {
  console.log("ClassInfo");
  return (
    <div className="class-info" id="class">
      <div className="class-description">
        <h3>Class</h3>
        <p>
          Sed sed aliquam mauris, at sagittis ligula. Integer ligula metus,
          finibus non arcu nec, rhoncus fringilla nunc. Phasellus vel metus
          libero.
        </p>
        <p>
          <strong>Monday</strong>: 6:30-9:30pm
          <br />
          <strong>Tuesday</strong>: 6:30-9:30pm
          <br />
          <strong>Wednesday</strong>: 6:30-9:30pm
          <br />
          <strong>Thursday</strong>: 6:30-9:30pm
          <br />
          <strong>Friday</strong>: 6:30-9:30pm
          <br />
          <strong>Saturday</strong>: 6:30-9:30pm
        </p>
      </div>
      <div className="classphoto-container">
        <img className="classphoto" src="img/class.jpeg" />
      </div>
    </div>
  );
};
