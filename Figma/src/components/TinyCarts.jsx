import React from 'react';
import User from '../assets/images/OIP.jpg';  // Adjusted path
import './TinyCarts.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TinyCarts = () => {


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
      <section>
        <div className='head1'>
            <h1>Welcome to Tinykarts </h1>
            <span> Empowering Local Artisans, Connecting Global Markets</span>
        </div>

        <div className='banner'>
            <div className='slide'>
                <p>At Tinykarts, we bridge the gap between village craftsmanship and the global marketplace. Our platform is dedicated to showcasing the talent and creativity of small-scale manufacturers from rural communities, bringing their unique, high-quality products to customers worldwide.</p>
            </div>

            <div className='banner-1'> 
                <div>
                    {/* React Slick Slider */}
                    <Slider {...settings} className="border-2">
                        <div>
                            <img src={User} alt="Image 1" style={{ width: '100%' }}  className='img-round'  />
                        </div>
                        <div>
                            <img src={User} alt="Image 2" style={{ width: '100%' }}   className='img-round'  />
                        </div>
                        <div>
                            <img src={User} alt="Image 3" style={{ width: '100%' }}   className='img-round' />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default TinyCarts;
