import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Rosa from "react-on-scroll-animation";
import "../App.css";
const imgSourceArr = require("./photos.json");

export function InstaFeed() {
  const [column, setColumn] = useState(3);

  const handleResize = () => {
    if (window.innerWidth > 900) {
      setColumn(3);
    } else if (window.innerWidth > 600) {
      setColumn(2);
    } else {
      setColumn(1);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="InstaFeed">
      <Masonry
        breakpointCols={column}
        className={"my-masonry-grid-" + column}
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
