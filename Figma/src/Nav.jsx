import React from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import logo from "./assets/images/logo.png"; // Fixed the image import
import './Nav.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Nav = () => {
  return (

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    {/* <!-- Logo Section --> */}
    <div class="logo-container">
      <img src={logo} alt="Logo" class="logo" />
    </div>

    {/* <!-- Toggle button for mobile view --> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    {/* <!-- Navbar Items Section --> */}
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#home">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#products">PRODUCT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">CONTACT</a>
        </li>
      </ul>

      {/* <!-- Icons Section --> */}
      <ul class="navbar-nav ms-3">
        <li class="nav-item">
          <a class="nav-link" href="#"><MdOutlineShoppingBag /></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><FaHeartCirclePlus /></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><FaUserCircle /></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Nav;
