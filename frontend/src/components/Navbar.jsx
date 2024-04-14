import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-[#E98C00] p-4">
      <div className="w-full flex justify-between items-center">
        <div className="ml-4">
          {!isHome && (
            <div className="h-16 w-24">
              <Link to='/'>
                <img src="/Logo.jpg" alt="Logo" className="h-full w-full"/>
              </Link>
            </div>
          )}
        </div>
        <div className="flex flex-grow font-thin">
          <ul className={`flex space-x-6 ${isHome ? 'ml-16' : 'ml-4'}`}>
            <li><Link to="/productos" className="text-white" style={{ fontSize: '25px' }}>Productos</Link></li>
            <li><Link to="/mi-tienda" className="text-white" style={{ fontSize: '25px' }}>Mi Tienda</Link></li>
            <li><Link to="/aboutUs" className="text-white" style={{ fontSize: '25px' }}>Nosotros</Link></li>
            <li><Link to="/contacto" className="text-white" style={{ fontSize: '25px' }}>Contacto</Link></li>
          </ul>
        </div>
        {isLoggedIn ? (
          <div className="flex items-center mr-20">
            <Link to="/cart" className="text-white text-xl mr-4">
              <i className="fas fa-shopping-cart"></i>
            </Link>
            <Link to="/search" className="text-white text-xl mr-4">
              <i className="fas fa-search"></i>
            </Link>
            <Link to="/profile" className="text-white text-xl mr-4">
              <i className="fas fa-user"></i>
            </Link>
            <button onClick={handleLogout} className="text-white text-xl mr-4">Cerrar Sesión</button>
          </div>
        ) : (
          <div className="flex items-center mr-20">
            <ul className="flex space-x-5 mr-4 items-center">
              <li><Link to="/login" className="text-white font-thin" style={{ fontSize: '25px' }}>Iniciar Sesión</Link></li>
              <li><Link to="/register" 
                className="text-white font-bold border-2 border-white rounded px-4 py-2 text-center" 
                style={{ fontSize: '20px' }}
                >Crear Cuenta</Link>
              </li>
            </ul>
            <Link to="/cart" className="text-white text-xl mr-4">
              <i className="fas fa-shopping-cart"></i>
            </Link>
            <Link to="/search" className="text-white text-xl mr-4">
              <i className="fas fa-search"></i>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;