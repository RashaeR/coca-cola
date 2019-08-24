import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import cola from "../img/cola.jpg";
import cola2 from "../img/cola2.jpg";
import cola3 from "../img/cola3.png";
import "../css/carousel.css";

export default function Carousels() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel
      activeIndex={index}
      direction={direction}
      onSelect={handleSelect}
      className="format"
      fade={true}
      pauseOnHover={false}
      indicators={false}
    >
      <Carousel.Item>
        <img className="photoFormat " src={cola} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="photoFormat " src={cola2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="photoFormat " src={cola3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
