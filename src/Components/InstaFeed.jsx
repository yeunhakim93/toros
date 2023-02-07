import React from "react";
import Masonry from "react-masonry-css";
import Rosa from "react-on-scroll-animation";
import "../App.css";
const imgSourceArr = require("./photos.json");

export function InstaFeed() {
  return (
    <div className="InstaFeed">
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {imgSourceArr.map((imgSource, i) => {
          return (
            <Rosa
              animation="fade-up"
              once={true}
              offset={300}
              className="my-masonry-grid-rosa"
            >
              <img
                className="my-masonry-grid_column-item"
                src={process.env.PUBLIC_URL + imgSource}
              />
            </Rosa>
          );
        })}
      </Masonry>
    </div>
  );
}
