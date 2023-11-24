import React from 'react';
import Hoteleria from '../assets/Hoteleria.jpg'
import Ambiente from '../assets/Ambiente.jpg'

const HotelInfo = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Hotel de Lujo</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={Hoteleria} alt="Primera Imagen" className="img-fluid mb-4" />
        </div>
        <div className="col-md-6">
          <p>
            Bienvenido al Hotel de Lujo, un lugar donde la elegancia se encuentra con la comodidad.
            Ofrecemos servicios de clase mundial y una experiencia inolvidable para nuestros huéspedes.
          </p>
          <p>
            Nuestras instalaciones incluyen habitaciones lujosas, una piscina impresionante, restaurantes
            gourmet y mucho más.
          </p>
          <p>
            ¡Esperamos que disfrutes de tu estancia con nosotros y que tengas unas vacaciones inolvidables!
          </p>
          <p>
            Sumérgete en el lujo de nuestras suites elegantemente decoradas, diseñadas para brindar
            el máximo confort y estilo. Disfruta de vistas espectaculares desde nuestras amplias
            ventanas y relájate en tu propio oasis privado.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6 order-md-2">
          <img src={Ambiente} alt="Segunda Imagen" className="img-fluid mb-4" />
        </div>
        <div className="col-md-6 order-md-1">
          <p>
            Explora nuestros exclusivos servicios, desde tratamientos de spa rejuvenecedores hasta
            experiencias gastronómicas extraordinarias. En el Hotel de Lujo, cada momento es una
            oportunidad para deleitar tus sentidos y crear recuerdos inolvidables.
          </p>
          <p>
            ¡Te damos la bienvenida a una estancia que superará tus expectativas y te brindará
            una experiencia única en hospitalidad de lujo!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HotelInfo;

