import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import slide_one from '../../../src/featured/images/HomeSlider/Main-Images/05.jpg';
import slide_two from '../../../src/featured/images/HomeSlider/Main-Images/06.jpg';
import slide_three from '../../../src/featured/images/HomeSlider/Main-Images/10.jpg';

const HomeSlider = () => {

  const settings = {
      dots: true,
      autoplay: true,
      speed: 500,
      arrows: true,
  }

  return (
    <div 
      style={{
        height: '350px',
        marginBottom: '50px',
      }}
    >
    <Slider {...settings}>
      <div>
        <div 
          style={{
            backgroundImage:`url(${slide_one})`,
            backgroundSize: `cover`,
            height: '350px',
          }}
        ></div>
    </div>
    <div>
      <div 
        style={{
          background:`url(${slide_two})`,
          backgroundSize: `cover`,
          height: '350px',
        }}
      ></div>
    </div>
    <div>
      <div 
        style={{
          background:`url(${slide_three})`,
          backgroundSize: `cover`,
          height: '350px',
        }}
      ></div>
      </div>
    </Slider>
    </div>
  );
};

export default HomeSlider;