import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Fachada from '../assets/Fachada.jpg';
import Habitacion from '../assets/Habitacion.jpg';
import Piscina from '../assets/Piscina.jpg';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [Fachada, Habitacion, Piscina];

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Sorpréndete</h2>
      <div style={{ margin: '20px auto', maxWidth: '600px' }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <img
                src={image}
                alt={`Imagen ${index + 1}`}
                style={{ width: '100%', height: 'auto', borderRadius: '40%' }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;

