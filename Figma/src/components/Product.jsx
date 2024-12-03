import React from 'react';
import './Product.css';


export const Product = () => {
  return (
    <div>
      <section>
    
        <div className='head1'>
            <h1>Our Product Categories </h1>
            <span>Explore a wide range of locally sourced products</span>
        </div>
        <div className='All-box'>
            <div className='box'></div>


            <div className='box'></div>
       

            <div className='box'></div>
         

            <div className='box'></div>
         
        </div>
        <div className='span'>
        <span className='box-label'>Handcrafted Home Décor</span>
        <span className='box-label'>Organic and Sustainable Goods</span>
        <span className='box-label'>Traditional Wear and Accessories</span>
        <span className='box-label'>Unique Gifts and Souvenirs</span>
        </div>
      </section>
    </div>
  );
};
