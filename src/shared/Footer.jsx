import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contáctenos</h5>
            <p>Dirección: Dirección del Hotel, Ciudad</p>
            <p>Teléfono: +123 456 789</p>
            <p>Email: info@hotel-lujo.com</p>
          </div>
          <div className="col-md-6">
            <h5>Síguenos en Redes Sociales</h5>
            <div>
              <a href="#" className="text-white me-2"><i className="fab fa-facebook-f"></i>Página de Facebook</a>
              <a href="#" className="text-white me-2"><i className="fab fa-twitter"></i>Página de Twitter</a>
              <a href="#" className="text-white me-2"><i className="fab fa-instagram"></i>Página de Instragram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
