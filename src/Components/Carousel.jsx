import React from "react";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const CarouselContainer = () => {
  console.log("Carousel");
  return (
    <Carousel
      autoPlay={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      boolean={false}
      interval={4000}
      transitionTime={1000}
    >
      <div>
        <img src="img/extended/1.png" />
      </div>
      <div>
        <img src="img/extended/2.png" />
      </div>
      <div>
        <img src="img/extended/3.png" />
      </div>
      <div>
        <img src="img/extended/4.png" />
      </div>
      <div>
        <img src="img/extended/5.png" />
      </div>
      <div>
        <img src="img/extended/6.png" />
      </div>
    </Carousel>
  );
};
