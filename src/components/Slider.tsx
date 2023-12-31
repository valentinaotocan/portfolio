import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useSwipeable } from "react-swipeable";
import turtle from "../assets/images/turtle.jpeg";
import daisy from "../assets/images/daisy.jpeg";
import mountain from "../assets/images/mountain.jpeg";
import nature from "../assets/images/nature.jpeg";
import krka from "../assets/images/krka.jpeg";
import sunset from "../assets/images/sunset.jpeg";
import marler from "../assets/images/marler.jpeg";
import storm from "../assets/images/storm.jpeg";
import foggyBled from "../assets/images/fog-bled.jpeg";
import foggyVenezia from "../assets/images/fog-venezia.jpeg";

interface Image {
  title: string;
  src: string;
}

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const images: Image[] = [
    { title: "Turtle", src: turtle },
    { title: "Daisy", src: daisy },
    { title: "Mountain", src: mountain },
    { title: "Nature", src: nature },
    { title: "NP Krka", src: krka },
    { title: "Sunset", src: sunset },
    { title: "Rt Marler", src: marler },
    { title: "Storm", src: storm },
    { title: "Bled", src: foggyBled },
    { title: "Venezia", src: foggyVenezia },
  ];

  const prevSlide = () => {
    const isFirstSlide = slideIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : slideIndex - 1;
    setSlideIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = slideIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : slideIndex + 1;
    setSlideIndex(newIndex);
  };

  const handleDotClick = (index: number) => {
    setSlideIndex(index);
  };

  // Handle swiping left and right
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });

  return (
    <div className="slider pos-r" {...swipeHandlers}>
      <div className="slide">
        <img src={images[slideIndex].src} alt={images[slideIndex].title} />
      </div>
      <BsFillArrowLeftCircleFill
        className="arrow arrow--left"
        onClick={prevSlide}
      />
      <BsFillArrowRightCircleFill
        className="arrow arrow--right"
        onClick={nextSlide}
      />
      <div className="dots pos-a flex flex-ai--c flex-jc--c">
        {images.map((image, index) => (
          <div
            key={index}
            className={`dot ${index === slideIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
export default Slider;
