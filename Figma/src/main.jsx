import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './components/Nav/Nav.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Testimonials from './components/Slider/Testimonials.jsx'
import TinyCarts from './components/TinyCarts/TinyCarts.jsx'
import { Product } from './components/Product/Product.jsx'
import Vision from './components/Vision/Vision.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Nav/>
    <Testimonials/>
    <TinyCarts/>
    <Product/>
    <Vision/>

  </StrictMode>,
)
