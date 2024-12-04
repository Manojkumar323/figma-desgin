import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import User from '/images/banner.jpg'; // Example image, replace with your actual path.

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Change image every 5 seconds (5000ms)
  };

  return (
    <div>
      {/* React Slick Slider */}
      <Slider {...settings} className="border">
        <div>
          <img src={User} alt="Image 1" style={{ width: '100%' }}  />
        </div>
        <div>
          <img src={User} alt="Image 2" style={{ width: '100%' }} />
        </div>
        <div>
          <img src={User} alt="Image 3" style={{ width: '100%' }}  />
        </div>
      </Slider>
    </div>
  );
}

export default Testimonials;
