import React from "react";

import Carousel from "./Carousel";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";
import SlideThree from "./SlideThree";

const CarouselContainer: React.FC = () => {
  return (
    <div>
      <Carousel>
        <SlideOne />
        <SlideTwo />
        <SlideThree />
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
