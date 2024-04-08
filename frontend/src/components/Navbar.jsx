import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="w-full flex justify-between items-center">
        <div className="ml-4">
          <Link to="/" className="text-white text-xl font-semibold">LOGO</Link>
        </div>
        <div className="flex justify-center flex-grow">
          <ul className="flex space-x-20">
            <li><Link to="/productos" className="text-white">Productos</Link></li>
            <li><Link to="/mi-tienda" className="text-white">Mi Tienda</Link></li>
            <li><Link to="/nosotros" className="text-white">Nosotros</Link></li>
            <li><Link to="/contacto" className="text-white">Contacto</Link></li>
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

