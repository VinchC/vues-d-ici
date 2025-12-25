import * as React from "react";
import styled, { css } from "styled-components";

const SCarouselWrapper = styled.div`
  display: flex;
`;

interface ICarouselSlide {
  active?: boolean;
}

const SCarouselSlide = styled.div<ICarouselSlide>`
  flex: 0 0 auto;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: all 1s ease;
  width: 100%;
`;

interface ICarouselProps {
  slidecurrent: number;
}


const SCarouselSlides = styled.div<ICarouselProps>`
display: flex;
${(props) =>
  props.slidecurrent && props.slidecurrent > 2
  ? css`
  transform: translateX(-${props.slidecurrent * 100} + 100%);
  `
  : css`
  transform: translateX(-${props.slidecurrent * 100}%);
  `};
  transition: all 2s ease;
  `;
  
  interface IProps {
    children: React.JSX.Element[];
  }
  
  const Carousel = ({ children }: IProps) => {
    const [slideCurrent, setCurrentSlide] = React.useState(0);
    
    const activeSlide = children.map((slide, index) => (
      <SCarouselSlide active={slideCurrent === index} key={index}>
      {slide}
    </SCarouselSlide>
  ));
  
  return (
    <div>
      <SCarouselWrapper>
        <SCarouselSlides slidecurrent={slideCurrent}>
          {activeSlide}
        </SCarouselSlides>
      </SCarouselWrapper>
      <div className="flex justify-center">
        <button
          className="mr-8"
          onClick={() => {
            setCurrentSlide(
              (slideCurrent - 1 + activeSlide.length) % activeSlide.length
            );
          }}
        >
          Précédent
        </button>
        <button
          className="ml-8"
          onClick={() => {
            setCurrentSlide((slideCurrent + 1) % activeSlide.length);
          }}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Carousel;
