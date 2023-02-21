import React from "react";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
 
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleHome= (event) => {
    if (window.location.pathname !== '/') {
      event.preventDefault(); // impedimos que o link siga seu comportamento padrão
      window.location.href = '/'; // redirecionamos o usuário para a página inicial
    }
  }

  const handleAbout= (event) => {
    if (window.location.pathname !== '/') {
      event.preventDefault(); // impedimos que o link siga seu comportamento padrão
      window.location.href = 'about'; // redirecionamos o usuário para a página inicial
    }
  }

  const handleContact= (event) => {
    if (window.location.pathname !== '/') {
      event.preventDefault(); // impedimos que o link siga seu comportamento padrão
      window.location.href = 'contact'; // redirecionamos o usuário para a página inicial
    }
  }

  return (
   

    <nav className="navbar m-auto  navbar-expand-md navbar-light bg-light fixed-top">
      <div className="container d-flex justify-content-center m-auto" style={{ marginLeft: '15px', marginRight: '15px' }}>
        <a className="navbar-brand d-flex justify-content-center" href="/">
          <img src="https://www.revistaadventista.com.br/wp-content/uploads/2017/08/a-marca-da-igreja-logotipo.jpg" alt="logo" height="30" />
        </a>

        <button className="navbar-toggler" type="button" onClick={handleToggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={handleHome}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutUs" onClick={handleAbout}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleContact}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>



  );
}
