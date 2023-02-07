import React from "react";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const imgArr = [
  require("../img/extended/1.png"),
  require("../img/extended/2.png"),
  require("../img/extended/3.png"),
  require("../img/extended/4.png"),
];

export const CarouselContainer = () => {
  console.log("Carousel");
  return (
    <div className="carousel-outer-container">
      <div className="carousel-container">
        <Carousel
          autoPlay={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          boolean={false}
          interval={4000}
          transitionTime={1000}
        >
          {imgArr.map((img) => (
            <div key={img}>
              <img src={img} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
