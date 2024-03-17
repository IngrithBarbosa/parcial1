import React from 'react';
import frame from '../frame.png';

function Header() {
  return (
    <div className="header">
      <header>
          <h1 className="encabezado">TuSegundazo.com</h1>
          <img className="imgHeader" src={frame} alt="Header" />
      </header>
    </div>
  );
}

export default Header;