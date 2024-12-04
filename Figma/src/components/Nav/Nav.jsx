import React from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import logo from "/images/logo.png"; // Fixed the image import
import './Nav.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Nav = () => {
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li><a href="#home">HOME</a></li>
          <li><a href="#products">PRODUCT</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
        <div className="icons">
          <ul className="icon-list">
            <li className='bag'><MdOutlineShoppingBag /></li>
            <li><FaHeartCirclePlus /></li>
            <li><FaUserCircle /></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
