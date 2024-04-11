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
            <li><Link to="/mi-tienda" className="text-white">Mi Tienda</Link></li>
            <li><Link to="/aboutUs" className="text-white">Nosotros</Link></li>
            <li><Link to="/contacto" className="text-white">Contacto</Link></li>
          </ul>
        </div>
        <div className="flex items-center">
          <Link to="/cart" className="text-white text-xl mr-4">
            <i className="fas fa-shopping-cart"></i>
          </Link>
          <Link to="/search" className="text-white text-xl mr-4">
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

