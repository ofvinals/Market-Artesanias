import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="bg-[#E98C00] p-4">
      <div className="w-full flex justify-between items-center">
        <div className="ml-4">
          {!isHome && (
            <div className="h-24 w-30">
              <Link to='/'>
                <img src="/logo.jpg" alt="Logo" className="h-full w-full object-cover" />
              </Link>
            </div>
          )}
        </div>
        <div className="flex justify-center flex-grow">
          <ul className="flex space-x-20">
            <li><Link to="/productos" className="text-white">Productos</Link></li>
            <li><Link to="/mistore" className="text-white">Mi Tienda</Link></li>
            <li><Link to="/nosotros" className="text-white">Nosotros</Link></li>
            <li><Link to="/contacto" className="text-white">Contacto</Link></li>
            <li><Link to="/login" className="text-white">Inicia Sesión</Link></li>
            <li><Link to="/register" className="text-white">Registrate</Link></li>
          </ul>
        </div>
        <div className="flex items-center">
          <Link to="/carrito" className="text-white text-xl mr-4">
            <i className="fas fa-shopping-cart"></i>
          </Link>
          <Link to="/buscar" className="text-white text-xl mr-4">
            <i className="fas fa-search"></i>
          </Link>
          <Link to="/login" className="text-white text-xl mr-4">
            <i className="fas fa-user"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

