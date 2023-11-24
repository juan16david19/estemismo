import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home/Home'
import { Formulario } from './Formulario/Formulario'
import ImageCarousel from './Carousel/ImageCarousel'
import Menu from './shared/Menu'
import Footer from './shared/Footer'
import HotelInfo from './HotelInfo/HotelInfo'

import'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.min.js'
import { Carousel } from 'bootstrap'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Menu/>
    <Home />
    <ImageCarousel/>
    <HotelInfo/>
    <Footer/>


  </React.StrictMode>,
)
