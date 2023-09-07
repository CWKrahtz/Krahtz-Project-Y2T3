import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import KF1 from '../images/kf1.jpg'
import KF2 from '../images/kf2.jpg'
import KF3 from '../images/kf3.webp'

function BasicCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={KF1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>New To Fitness</h3>
          <h5>Welcome to KrahtzFitness! WE are excited to have you here.</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={KF2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Open Window Project</h3>
          <h5>For this project I used vs code, react, bootstrap, mongodb, etc...</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={KF3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Proud</h3>
          <h5>
            I am proud about this website. First time getting sessionStorage to work and will implement a feature that allow more then one item select.
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BasicCarousel;