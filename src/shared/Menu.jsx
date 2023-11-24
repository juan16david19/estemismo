import React from 'react';

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#000" }}>
      <ul className="navbar-nav mx-auto"> 
        <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Servicios</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Acerca de</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Menu;



